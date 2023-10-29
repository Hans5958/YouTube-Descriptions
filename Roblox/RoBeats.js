import printInfo from '../modules/pretty-print-info.js'
import extraDescTemplate from '../modules/extra-desc.js'

import {roblox as gameInfo} from './modules/game-info.js'
import serverInfos from './modules/server-info.js'

import modInfos from './modules/rbfnf-mod-info.js'

const data = `
FNB	Mamigation			mami	Holy		FALSE	FALSE	FALSE		435	131	26	2	4	1	305	302800	302766	99.04	Bigot411	2023/8/23
`.trim()
const recorder = 'Open Broadcaster Software (OBS Studio)'

let extraDesc = [
	extraDescTemplate['to1080pUpscale'],
]

let [
	songNameReal,
	songNameGame,
	songNameVidTitle,
	modId,
	chartVariationReal,
	chartVariationGame,
	resultsPerfect,
	resultsGreat,
	resultsGood,
	resultsMiss,
	resultsMaxCombo,
	resultsScoreMain,
	resultAccuracy,
	opponentName,
	replayDateStr
] = data.split('	')

const replayDate = new Date(replayDateStr).toLocaleDateString('en-UK',  { year: 'numeric', month: 'long', day: 'numeric' })

resultsPerfect = parseInt(resultsPerfect)
resultsGreat = parseInt(resultsGreat)
resultsGood = parseInt(resultsGood)
resultsMiss = parseInt(resultsMiss)
resultsScoreMain = parseInt(resultsScoreMain)
resultAccuracy = parseFloat(resultAccuracy.replace(',', '.'))

const serverInfo = serverInfos['Robeats']

const modInfo = modInfos[modId] || null

let key = {
	'Clear': 'Completing a song, also known as passing.',
	'SDCB': 'Single Digit Combo Break. A single digit amount of miss breaking a full combo.',
	'MF': 'Miss Flag. A single miss breaking a full combo.',
	'FC': 'Full Combo. Completing a song without missing a note.',
	'SDG': 'Single Digit Great. A single digit amount of great breaking a perfect full combo.',
	'BF': 'Black Flag. A great breaking a perfect full combo.',
	'PFC': 'Perfect Full Combo. Completing a song with hitting nothing but marvelous and perfect notes (or sicks).',
	'PA': 'Perfect Ratio. The ratio of perfect notes with great notes.',
}

const modKey = {
	'NMC': 'No Modcharts',
	'NGN': 'No Gimmick Notes',
	'NG': 'No Gimmicks',
}

let keyUsed = []
const modKeyUsed = []

let title = `[${gameInfo.abb} ${serverInfo.abb}] ${songNameVidTitle || songNameReal} (${chartVariationReal}`


title += `) ${resultAccuracy.toFixed(2)}% `

console.log(resultsMiss)

if (resultsMiss >= 10) {
	keyUsed.push('Clear')
	title += resultsMiss + "xMiss"
} else if (1 < resultsMiss && resultsMiss < 10) {
	keyUsed.push('SDCB')
	title += "SDCB"
	// SDCB (SDS)
} else if (resultsMiss == 1) {
	keyUsed.push('MF')
	title += "MF"
	// MF
} else if (!resultsMiss) {
	if (1 < resultsGreat && resultsGreat < 10) {
		keyUsed.push('FC', 'SDG')
		title += "SDG"
		// SDG
	} else if (resultsGreat == 1) {
		keyUsed.push('FC', 'BF')
		title += "BF"
		// BF
	} else if (!resultsGreat) {
		keyUsed.push('PFC')
		title += "PFC"
		// PFC	
	} else {
		keyUsed.push('FC')
		title += "FC"
		// FC	
	}
}

let description = `This is a replay of ${serverInfo.name}, a Roblox game based on StepMania. Played on ${replayDate}.`

let scoreText = `Score: ${resultsScoreMain}`

let judgementText
let ratioText


keyUsed.push('PA')
judgementText = `Judgement: ${[resultsPerfect, resultsGreat, resultsGood, resultsMiss].map(num => num.toLocaleString()).join('/')}`
ratioText = `Ratio (PA): ${(resultsPerfect/resultsGreat).toFixed(2)}:1`

let chartVariationText = chartVariationReal
if (chartVariationGame) chartVariationText += ` (in-game: ${chartVariationGame})`

if (extraDesc.length) description += '\n\n' + extraDesc.join('\n\n')

description += `\n\nGame: ${gameInfo.fullName}
Experience: ${serverInfo.name} (https://www.roblox.com/games/${serverInfo.id})
Date: ${replayDate}
Recorder: ${recorder}

Name: ${songNameReal}${songNameGame ? ` (in-game: ${songNameGame})`: ''}
`

if (modInfo) description += `Mod: ${modInfo.name}${modInfo.link ? ` (${modInfo.link})`: ''}
`

description += `Chart Variation: ${chartVariationText}\n`
if (modKeyUsed.length) description += `Modifier: ${modKeyUsed.map(mod => modKey[mod]).join(', ')}\n`

if (opponentName || opponentName == "?") description += `\nOpponent: ${opponentName}`

description += `
${scoreText}
Accuracy: ${resultAccuracy.toFixed(2)}%
${judgementText}
${ratioText}`

if (resultsMaxCombo) description += `\nMax. Combo: ${resultsMaxCombo}`

if (keyUsed.length) description += '\n\n' + `Key Description: 
${'- '+keyUsed.map(arr => `${arr}: ${key[arr]}`).join('\n- ')}`

description += '\n\nInformation Notes: '

description += "\n- Judgements are sorted from Perfect, Great, Good (Okay), and Miss"

description += `
- Some of the terminology are based on Etterna, StepMania, and other related VSRG games.
- Other information, including credits, may be found on the video and/or the links given.
- Usually, variations of a chart is for different difficulties, but there are rare cases when it varies by other factors.`

printInfo(title, description)
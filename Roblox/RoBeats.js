import printInfo from '../modules/pretty-print-info.js'
import extraDescTemplate from '../modules/extra-desc.js'

import {roblox as gameInfo} from './modules/game-info.js'
import serverInfos from './modules/server-info.js'

const data = `
F-777 -- Monster Dance Off			Normal 16		713	144	4	8	329	94.59	502820	667451	A		2023/8/29
`.trim()
const recorder = 'Open Broadcaster Software (OBS Studio)'

let extraDesc = [
	extraDescTemplate['to1080pUpscale'],
]

let [
	songNameReal,
	songNameGame,
	songNameVidTitle,
	chartVariationReal,
	chartVariationGame,
	resultsPerfect,
	resultsGreat,
	resultsGood,
	resultsMiss,
	resultsMaxCombo,
	resultAccuracy,
	resultsScore1,
	resultsScore2,
	resultsRank,
	opponentName,
	replayDateStr
] = data.split('	')

const replayDate = new Date(replayDateStr).toLocaleDateString('en-UK',  { year: 'numeric', month: 'long', day: 'numeric' })

songNameReal = songNameReal.replace('--', '–')
songNameGame = songNameGame.replace('--', '–')
songNameVidTitle = songNameVidTitle.replace('--', '–')

resultsPerfect = parseInt(resultsPerfect)
resultsGreat = parseInt(resultsGreat)
resultsGood = parseInt(resultsGood)
resultsMiss = parseInt(resultsMiss)
resultsScore1 = parseInt(resultsScore1)
resultsScore2 = parseInt(resultsScore2)
resultAccuracy = parseFloat(resultAccuracy.replace(',', '.'))

const serverInfo = serverInfos['Robeats']

let key = {
	'SDCB': 'Single Digit Combo Break. A single digit amount of miss breaking a full combo.',
	'MF': 'Miss Flag. A single miss breaking a full combo.',
	'FC': 'Full Combo. Completing a song without missing a note.',
	'SDG': 'Single Digit Great. A single digit amount of great breaking a perfect full combo.',
	'BF': 'Black Flag. A great breaking a perfect full combo.',
	'PFC': 'Perfect Full Combo. Completing a song with hitting nothing but marvelous and perfect notes (or sicks).',
	'PA': 'Perfect Ratio. The ratio of perfect notes with great notes.',
}

let keyUsed = []

let title = `[${serverInfo.abb}] ${songNameVidTitle || songNameReal} (${chartVariationReal}`


title += `) ${resultAccuracy.toFixed(2)}% ${resultsRank} `

console.log(resultsMiss)

if (resultsMiss >= 10) {
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

let scoreText = `Score: ${[resultsScore1, resultsScore2].filter(a => a).map(score => score.toLocaleString()).join('/')}}`

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

description += `Chart Variation: ${chartVariationText}\n`

if (opponentName || opponentName == "?") description += `\nOpponent: ${opponentName}`

description += `
${scoreText}
Accuracy: ${resultAccuracy.toFixed(2)}%
Rank: ${resultsRank}
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
import printInfo from '../modules/pretty-print-info.js'
import extraDescTemplate from '../modules/extra-desc.js'

import {rbfnf as gameInfo} from './modules/game-info.js'
import serverInfos from './modules/server-info.js'

import modInfos from './modules/rbfnf-mod-info.js'

const data = `
SF	Astral Projection			hotline24	Hard		FALSE	FALSE	FALSE		324	203	71	6	2	3		97.16	S	185100			2024/7/5
`.trim()

const recorder = 'Open Broadcaster Software (OBS Studio)'

let extraDesc = [

	// "Here are the first replays of Project: Afternight, a relatively new Friday Night Funkin' game on Roblox. It is quite similar to FNB with improvements here and there. You could say that it is a spiritual successor of it.",
	"Basically FNF: Remix just dropped a new update (well, it's been a while when you consider the time when I publish this), so I'll give it a go by playing some of the new songs, along with some recording to upload here.",
	// `Here are the last Malediction plays that I play on Friday Night Bloxxin'. As of circa 28 December 2022, the later update removeed this song along with Curse's related assets. The upload of the Bloxxin' Mix on YouTube has now been privatized. We'll meet again soon, my friend.`,
	// "I wanted to see how I perform on these stream maps in the morning. This is one of the three, which I uploaded in series.",
	// "The video showcases one of the April Fools joke on Project: Afternight at that time. There are no song on Indie Cross other than Saness. Choosing any other song would play Saness instead.",
	// "This is a part of a series of videos where I play various Friday Night Funkin' games in Roblox that I haven't played much. All the games are listed below, as usual, along with the link to the games. Stats availability varies; may not available in some games."s
	'-',
	// `This is a trial of me recording plays in full screen. This type of plays are going to be occassional; not always.`,
	extraDescTemplate['480pto1080pUpscaleGameplay'],
	// extraDescTemplate['audioAddedFromSilent']
	// extraDescTemplate['privacyReplaced'],
]

let [
	game,
	songNameReal,
	songNameGame,
	songNameVidTitle,
	modId,
	chartVariationReal,
	chartVariationGame,
	modLeftSideStr,
	modNoModchartStr,
	modNoGimmickNotesStr,
	modOtherStr,
	resultsMarveolus,
	resultsPerfect,
	resultsGood,
	resultsOk,
	resultsBad,
	resultsMiss,
	resultsMaxCombo,
	resultAccuracy,
	resultRating,
	resultsScoreMain,
	resultsScoreAltsStr,
	opponentName,
	replayDateStr
] = data.split('	')

const replayDate = new Date(replayDateStr).toLocaleDateString('en-UK',  { year: 'numeric', month: 'long', day: 'numeric' })

resultsMarveolus = parseInt(resultsMarveolus)
resultsPerfect = parseInt(resultsPerfect)
resultsGood = parseInt(resultsGood)
resultsOk = parseInt(resultsOk)
resultsBad = parseInt(resultsBad)
resultsMiss = parseInt(resultsMiss)
resultsScoreMain = parseInt(resultsScoreMain)
const resultsScoreAlts = resultsScoreAltsStr.split(' ').map(score => parseInt(score)).filter(a => a)
const modOther = modOtherStr.split(' ').filter(a => a)
resultAccuracy = parseFloat(resultAccuracy.replace(',', '.'))
const modLeftSide = modLeftSideStr === "TRUE"
const modNoModchart = modNoModchartStr === "TRUE"
const modNoGimmickNotes = modNoGimmickNotesStr === "TRUE"

const serverInfo = serverInfos[game]

const modInfo = modInfos[modId] || null

let key = {
	'Clear': 'Completing a song, also known as passing.',
	'SDCB': 'Single Digit Combo Break. A single digit amount of miss breaking a full combo.',
	'MF': 'Miss Flag. A single miss breaking a full combo.',
	'FC': 'Full Combo. Completing a song without missing a note.',
	'SDG': 'Single Digit Great. A single digit amount of great breaking a perfect full combo.',
	'BF': 'Black Flag. A great breaking a perfect full combo.',
	'PFC': 'Perfect Full Combo. Completing a song with hitting nothing but marvelous and perfect notes (or sicks).',
	'WF': 'White Flag. A perfect breaking a marvelous full combo.',
	'MFC': 'Marvelous Full Combo. Completing a song with hitting nothing but marvelous notes.',
	'MA': 'Marvelous Ratio. The ratio of marvelous notes with perfect notes.',
	'PA': 'Perfect Ratio. The ratio of perfect notes with great notes.',
	'SA': 'Sick Ratio. The ratio of sick notes with great notes.',
	'L-Side': "Left/Opponent Side. The opposite side of the player's side (also known as the left side, opponent side, etc) is played.",
	'NMC': 'No Modcharts. Modcharts are disabled.',
	'MC': 'Modcharts. Modcharts are enabled.',
	'NGN': 'No Gimmick Notes. Gimmick notes are disabled.',
	'NG': 'No Gimmicks. Modcharts and gimmick notes are disabled.',
	'HD': 'Hidden. Notes fade out as they approach the judgement line. Also known as Fade Out (FNB, old osu!).',
	'FI': 'Fade In. Notes fade in as they approach the judgement line. Also known as Sudden (StepMania).',
	'DM': 'Deathmatch. Die at 0 health.',
	'PF': 'Perfect. Hit all notes perfectly (Sick!) or die.',
	'SD': 'Sudden Death. Hit all notes or die.',
	'GT': 'No Ghost Tapping. Hitting without a note counts as a miss.',
	'MR': 'Mirror. Notes are reflected from left to right.'
}

const modKey = {
	'L-Side': "Left/Opponent Side",
	'NMC': 'No Modcharts',
	'NGN': 'No Gimmick Notes',
	'NG': 'No Gimmicks',
	'HD': 'Hidden',
	'FI': 'Fade In',
	'DM': 'Deathmatch',
	'PF': 'Perfect',
	'SD': 'Sudden Death',
	'GT': 'No Ghost Tapping',
	'MR': 'Mirror'
}

let keyUsed = []
const modKeyUsed = []
const titleMods = []

let title = `[${gameInfo.abb} ${serverInfo.abb}] ${songNameVidTitle || songNameReal} (${chartVariationReal}`

if (modLeftSide) {
	keyUsed.push('L-Side')
	modKeyUsed.push('L-Side')
}
if (modNoModchartStr && modNoGimmickNotes) {
	keyUsed.push('NG')
	modKeyUsed.push('NG')
} else if (modNoModchart) {
	keyUsed.push('NMC')
	modKeyUsed.push('NMC')
} else if (modNoGimmickNotes) {
	keyUsed.push('NGN')
	modKeyUsed.push('NGN')
}

if (modOther.length !== 0) {
	for (const mod of modOther) {
		keyUsed.push(mod)
	}
	modKeyUsed.push(modOther.join(''))
}

if (modKeyUsed.length > 0) {
	title += ' • ' + modKeyUsed.join(' ')
}

title += `) ${resultAccuracy.toFixed(2)}% ${resultRating && resultRating + " "}`

console.log(resultsGood)

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
	if (1 < resultsGood && resultsGood < 10) {
		keyUsed.push('FC', 'SDG')
		title += "SDG"
		// SDG
	} else if (resultsGood == 1) {
		keyUsed.push('FC', 'BF')
		title += "BF"
		// BF
	} else if (!resultsGood && !isNaN(resultsGood)) {
		if (resultsMarveolus) {
			if (resultsPerfect == 1) {
				keyUsed.push('WF')
				title += "WF"
			} else if (!resultsPerfect) {
				keyUsed.push('MFC')
				title += "MFC"
			} else {
				keyUsed.push('PFC')
				title += "PFC"
				// PFC		
			}
		} else {
			keyUsed.push('PFC')
			title += "PFC"
			// PFC	
		}
	} else {
		keyUsed.push('FC')
		title += "FC"
		// FC	
	}
}

let description = ""

const genericDescription = `This is a replay of ${serverInfo.name}, a Roblox game based on Friday Night Funkin'/StepMania. Played on ${replayDate}.`

let scoreText = `Score: ${[resultsScoreMain, ...resultsScoreAlts].map(score => score.toLocaleString()).join('/')}`

let judgementText
let ratioText

if (!isNaN(resultsMarveolus)) {
	keyUsed.push('MA', 'PA', 'SA')
	judgementText = `Judgement: ${[resultsMarveolus, resultsPerfect, resultsGood, resultsOk, resultsBad, resultsMiss].map(num => num.toLocaleString()).join('/')}`
	ratioText = `Ratio (MA/PA/SA): ${[resultsMarveolus/resultsPerfect, resultsPerfect/resultsGood, (resultsMarveolus+resultsPerfect)/resultsGood].map(num => num.toFixed(2) + ":1").join('/')}`
} else if (!isNaN(resultsPerfect) && !isNaN(resultsGood) && !isNaN(resultsOk) && isNaN(resultsBad)) {
	keyUsed.push('SA')
	judgementText = `Judgement: ${[resultsPerfect, resultsGood, resultsOk, resultsBad, resultsMiss].map(num => num.toLocaleString()).join('/')}`
	ratioText = `Ratio (SA): ${(resultsPerfect/resultsGood).toFixed(2)}:1`
} else {
	judgementText = `Misses: ${resultsMiss}`
}

let chartVariationText = chartVariationReal
if (chartVariationGame) chartVariationText += ` (in-game: ${chartVariationGame})`

if (extraDesc.length) {
	if (extraDesc.find(i => i === '-')) {
		description += extraDesc.map(i => i === "-" ? genericDescription : i).join('\n\n')
	} else {
		description += genericDescription + '\n\n' + extraDesc.join('\n\n')
	}
}

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
Accuracy: ${resultAccuracy.toFixed(2)}%`

if (resultRating) description += `
Grade/Rating: ${resultRating}`

if (ratioText) {
	description += `
${judgementText}
${ratioText}`
} else {
	description += `
${judgementText}`
}


if (resultsMaxCombo) description += `\nMax. Combo: ${resultsMaxCombo}`

if (keyUsed.length) description += '\n\n' + `Key Description: 
${'- '+keyUsed.map(arr => `${arr}: ${key[arr]}`).join('\n- ')}`

description += '\n\nInformation Notes: '

if (!isNaN(resultsMarveolus)) {
	description += "\n- Judgements are sorted from Marvelous, Perfect (Sick), Great (Good), Good (OK), Bad, and Miss"
} else if (!isNaN(resultsPerfect) && !isNaN(resultsGood) && !isNaN(resultsOk) && isNaN(resultsBad)) {
	description += "\n- Judgements are sorted from Perfect (Sick), Great (Good), Good (OK), Bad, and Miss"
} else {
	description += "\n- Only misses is shown here due to no final count of other judgements."
}

description += `
- Some of the terminology are based on Etterna, StepMania, and other related VSRG games.
- Other information, including credits, may be found on the video and/or the links given.
- Usually, variations of a chart is for different difficulties, but there are rare cases when it varies by other factors.`

printInfo(title, description)
import printInfo from '../modules/pretty-print-info.js'
import extraDescTemplate from '../modules/extra-desc.js'

import {rbfnf as gameInfo} from './modules/game-info.js'
import serverInfos from './modules/server-info.js'

import modInfos from './modules/rbfnf-mod-info.js'

const data = `FNB	Omnipresent			omnipresent	Original	Legacy	FALSE	FALSE	FALSE	1775	746	229	43	38	62	774	xXZAPTASTICXx	1525300	1525302	96.16	2022/8/7`
const recorder = 'Open Broadcaster Software (OBS Studio)'

let extraDesc = [
	// "I wanted to see how I perform on these stream maps in the morning. This is one of the three, which I uploaded in series.",
	extraDescTemplate['to1080pUpscale'],
	// extraDescTemplate['copyrightMuted']
]

let [
	game,
	songNameReal,
	songNameGame,
	songNameVidTitle,
	modId,
	chartVariationReal,
	chartVariationGame,
	isLeftSide,
	isNoModchart,
	isNoGimmickNotes,
	marvelousCount,
	perfectCount,
	goodCount,
	okCount,
	badCount,
	missCount,
	maxComboCount,
	opponentName,
	score1,
	score2,
	accuracy,
	dateString
] = data.split('	')

const date = new Date(dateString).toLocaleDateString('en-UK',  { year: 'numeric', month: 'long', day: 'numeric' })

marvelousCount = parseInt(marvelousCount)
perfectCount = parseInt(perfectCount)
goodCount = parseInt(goodCount)
okCount = parseInt(okCount)
badCount = parseInt(badCount)
missCount = parseInt(missCount)
score1 = parseInt(score1)
score2 = parseInt(score2)
accuracy = parseFloat(accuracy.replace(',', '.'))
isLeftSide = isLeftSide === "TRUE"
isNoModchart = isNoModchart === "TRUE"
isNoGimmickNotes = isNoGimmickNotes === "TRUE"

const serverInfo = serverInfos[game]

const modInfo = modInfos[modId]

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
	'L-Side': "Left Side. The opposite side of the player's side (also known as the left side, opponent side, etc) is played.",
	'NMC': 'No Modcharts. Modcharts are disabled on this play.',
	'NGN': 'No Gimmick Notes. Gimmick notes are disabled on this play.',
	'NG': 'No Gimmicks. Modcharts and gimmick notes are disabled on this play.'
}

let keyUsed = [	
]

let hasMods = false

let title = `[${gameInfo.abb} ${serverInfo.abb}] ${songNameVidTitle || songNameReal} (${chartVariationReal}`
if (isLeftSide) {
	keyUsed.push('L-Side')
	if (!hasMods) {
		hasMods = true
		title += ' •'
	}
	title += " L-Side"
}
if (isNoModchart) {
	keyUsed.push('NMC')
	if (!hasMods) {
		hasMods = true
		title += ' •'
	}
	title += " NMC"
} else if (isNoGimmickNotes) {
	keyUsed.push('NGN')
	if (!hasMods) {
		hasMods = true
		title += ' •'
	}
	title += " NGN"
} else if (isNoModchart && isNoGimmickNotes) {
	keyUsed.push('NG')
	if (!hasMods) {
		hasMods = true
		title += ' •'
	}
	title += " NG"
}
title += `) ${accuracy.toFixed(2)}% `
let description = `This is a play of ${serverInfo.name}, an FNF/StepMania-based game on Roblox. Played on ${date}.`

console.log(missCount)

if (missCount >= 10) {
	keyUsed.push('Clear')
	title += missCount + "xMiss"
} else if (1 < missCount && missCount < 10) {
	keyUsed.push('SDCB')
	title += "SDCB"
	// SDCB (SDS)
} else if (missCount == 1) {
	keyUsed.push('MF')
	title += "MF"
	// MF
} else if (!missCount) {
	if (1 < goodCount && goodCount < 10) {
		keyUsed.push('FC', 'SDG')
		title += "SDG"
		// SDG
	} else if (goodCount == 1) {
		keyUsed.push('FC', 'BF')
		title += "BF"
		// BF
	} else if (!goodCount) {
		if (marvelousCount) {
			if (perfectCount == 10) {
				keyUsed.push('PFC', 'WF')
				title += "WF"
			} else if (!perfectCount) {
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

let scoreText

if (score2) {
	scoreText = `Score: ${score1.toLocaleString()}/${score2.toLocaleString()}`
} else {
	scoreText = `Score: ${score1.toLocaleString()}`
}

let judgementText
let ratioText

if (marvelousCount) {
	keyUsed.push('MA', 'PA', 'SA')
	judgementText = `Judgement: ${marvelousCount.toLocaleString()}/${perfectCount.toLocaleString()}/${goodCount.toLocaleString()}/${okCount.toLocaleString()}/${badCount.toLocaleString()}/${missCount.toLocaleString()}`
	ratioText = `Ratio (MA/PA/SA): ${(marvelousCount/perfectCount).toFixed(2)}:1/${(perfectCount/goodCount).toFixed(2)}:1/${((marvelousCount+perfectCount)/goodCount).toFixed(2)}:1`
} else {
	keyUsed.push('SA')
	judgementText = `Judgement: ${perfectCount.toLocaleString()}/${goodCount.toLocaleString()}/${okCount.toLocaleString()}/${badCount.toLocaleString()}/${missCount.toLocaleString()}`
	ratioText = `Ratio (SA): ${(perfectCount/goodCount).toFixed(2)}:1`
}

let chartVariation = chartVariationReal
if (chartVariationGame) chartVariation += ` (${chartVariationGame})`

if (extraDesc.length) description += '\n\n' + extraDesc.join('\n\n')

description += `\n\nGame: ${gameInfo.fullName}
Experience: ${serverInfo.name} (https://www.roblox.com/games/${serverInfo.id})
Date: ${date}
Recorder: ${recorder}

Name: ${songNameReal}${songNameGame ? ` (aka. ${songNameGame})`: ''}
Mod: ${modInfo.name}${modInfo.link ? ` (${modInfo.link})`: ''}
Chart Variation: ${chartVariation}`

if (isLeftSide) description += ", Left/Opponent Side"
if (isNoModchart) description += ", No Modchart"
else if (isNoGimmickNotes) description += ", No Gimmick Notes"
else if (isNoModchart && isNoGimmickNotes) description += ", No Gimmicks"

if (opponentName || opponentName == "?") description += `\nOpponent: ${opponentName}`

description += `

${scoreText}
Accuracy: ${accuracy.toFixed(2)}%
${judgementText}
${ratioText}`

if (maxComboCount) description += `\nMax. Combo: ${maxComboCount}`

if (keyUsed.length) description += '\n\n' + `Key Description: 
${'- '+keyUsed.map(arr => `${arr}: ${key[arr]}`).join('\n- ')}`

description += '\n\nInformation Notes: '

if (marvelousCount) {
	description += "\n- Judgements are sorted from Marvelous, Perfect (Sick), Great (Good), Good (OK), Bad, and Miss"
} else {
	description += "\n- Judgements are sorted from Perfect (Sick), Great (Good), Good (OK), Bad, and Miss"
}

description += `
- Some of the terminology are based on Etterna, StepMania, and other DDR derivatives.
- Other information, including credits, may be found on the video and/or the links given.
- Usually, variations of a chart is for different difficulties, but there are rare cases when it varies by other factors.`

printInfo(title, description)
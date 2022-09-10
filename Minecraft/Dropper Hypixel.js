import printInfo from '../modules/pretty-print-info.js'
import extraDescTemplate from '../modules/extra-desc.js'

import {mc18 as gameInfo} from './modules/game-info.js'
import {hypixel as serverInfo} from './modules/server-info.js'

let id = 15
let subServerFullName = 'Dropper'
let subServerName = 'Dropper'
let date = '28 July 2022'
let recorder = 'NVIDIA ShadowPlay'

let [maps, splits, subServerId] = `Balloons, Well, Western, Castle, Factory
10 6 13 11 20 1:11.924
443M
`.split('\n')

let extraDesc = [
	// "This is my first plays of this minigame. The maps are brand-new to me at the time. I was delighted, yet unsurprised that Hypixel decides to create yet another HiveMC-inspired minigame, and the one that I often play (besides Pixel Party).",
	"Note that this is similar to HiveMC's Gravity.",
	// extraDescTemplate['copyrightMuted'],
	extraDescTemplate['copyrightMuted'],
	extraDescTemplate['480pto720pUpscale']
]

const splitsArr = splits.split(' ')
subServerId = 'mini' + subServerId

const abvSplitToTime = str => {
	if (str.length === 1) return '0:0' + str
	else if (str.length === 2) return '0:' + str
	return str
}

let title = `[${gameInfo.abb}] ${serverInfo.name}'s ${subServerName} Gameplay #${id} [${splitsArr[5]}]`

let description = `This is a play of ${subServerName}, a minigame of ${serverInfo.name}, a ${gameInfo.name} server. Played on ${date}.`

if (extraDesc.length) description += '\n\n' + extraDesc.join('\n\n')

description += `\n\nGame: ${gameInfo.fullName}
Game Version: ${gameInfo.version}
Server: ${serverInfo.fullName} (${serverInfo.ip})
Sub-Server: ${subServerFullName} (${subServerId})
Date: ${date}
Recorder: ${recorder}

Maps: ${maps}
Time: ${splitsArr[5]}
Splits: ${splitsArr.slice(0, -1).map(split => abvSplitToTime(split)).join(', ')}`

printInfo(title, description)
import printInfo from '../modules/pretty-print-info.js'
import extraDescTemplate from '../modules/extra-desc.js'

import {mc8 as gameInfo} from './modules/game-info.js'
import {blocksmc as serverInfo} from './modules/server-info.js'

let id = 10
let subServerFullName = 'Gravity'
let subServerName = 'Gravity'
let subServerId = 'mini353n'
let date = '28 April 2022'
let recorder = 'NVIDIA ShadowPlay'

let extraDesc = [
	"Note that this game is a copy of HiveMC's Gravity. The maps are also copied from it. Some same strats are used when HiveMC is online.",
	extraDescTemplate['copyrightMuted'],
	extraDescTemplate['480pto720pUpscale']
]


let title = `[${gameInfo.abb}] ${serverInfo.name}'s ${subServerName} Gameplay #${id}`

let description = `This is a play of ${subServerName}, a minigame of ${serverInfo.name}, a ${gameInfo.name} server. Played on ${date}.`

if (extraDesc.length) description += '\n\n' + extraDesc.join('\n\n')

description += `\n\nGame: ${gameInfo.fullName}
Game Version: ${gameInfo.version}
Server: ${serverInfo.fullName} (${serverInfo.ip})
Sub-Server: ${subServerFullName} (${subServerId})
Date: ${date}
Recorder: ${recorder}`

printInfo(title, description)
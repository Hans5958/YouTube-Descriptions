import printInfo from '../modules/pretty-print-info.js'
import extraDescTemplate from '../modules/extra-desc.js'

import {mc8 as gameInfo} from './modules/game-info.js'
import {hypixel as serverInfo} from './modules/server-info.js'

let id = 4
let subServerFullName = 'Arcade/Hole In The One'
let subServerName = 'Hole In The One'
let subServerCode = 'arcade_hole_in_the_wall'
let subServerId = 'mini402V'
let date = '29 April 2022'
let recorder = 'NVIDIA ShadowPlay'

let extraDesc = [
	extraDescTemplate['480pto720pUpscale']
]

let title = `[${gameInfo.abb}] ${serverInfo.name}'s ${subServerName} Gameplay #${id}`

let description = `This is a play of ${subServerName}, a minigame of ${serverInfo.name}, a ${gameInfo.name} server. Played on ${date}.`

if (extraDesc.length) description += '\n\n' + extraDesc.join('\n\n')

description += `\n\nGame: ${gameInfo.fullName}
Game Version: ${gameInfo.version}
Server: ${serverInfo.fullName} (${serverInfo.ip})
Sub-Server: ${subServerFullName} (${subServerCode}, ${subServerId})
Date: ${date}
Recorder: ${recorder}`

printInfo(title, description)
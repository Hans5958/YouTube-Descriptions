import printInfo from '../modules/pretty-print-info.js'
import extraDescTemplate from '../modules/extra-desc.js'

import {mc8 as gameInfo} from './modules/game-info.js'
import {hypixel as serverInfo} from './modules/server-info.js'

let id = 1
let subServerFullName = 'Classic/Turbo Kart Racers'
let subServerName = 'Turbo Kart Racers'
let subServerCode = 'tkr'
let subServerId = 'mini550G'
let map = ''
let date = '8 January 2022'
let recorder = 'NVIDIA ShadowPlay'

let extraDesc = [
	extraDescTemplate['480pto720pUpscale']
]

let key = [
]

let title = `[${gameInfo.abb}] ${serverInfo.name}'s ${subServerName} Gameplay #${id} [${map}]`

let description = `This is a replay of ${subServerName}, a minigame of ${serverInfo.name}, a ${gameInfo.name} server. Played on ${date}.`

if (extraDesc.length) description += '\n\n' + extraDesc.join('\n\n')

description += `\n\nGame: ${gameInfo.fullName}
Game Version: ${gameInfo.version}
Server: ${serverInfo.fullName} (${serverInfo.ip})
Sub-Server: ${subServerFullName} (${subServerCode}, ${subServerId})
Map: ${map}
Date: ${date}
Recorder: ${recorder}`

if (key.length) description += '\n\n' + `Key Description (keep in mind that this is subjective): 
${'- '+key.map(arr => arr[0] + ': ' + arr[1]).join('\n- ')}`

printInfo(title, description)
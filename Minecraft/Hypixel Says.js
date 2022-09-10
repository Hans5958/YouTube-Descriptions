import printInfo from '../modules/pretty-print-info.js'
import extraDescTemplate from '../modules/extra-desc.js'

import {mc8 as gameInfo} from './modules/game-info.js'
import {hypixel as serverInfo} from './modules/server-info.js'

let id = 2
let subServerFullName = 'Arcade/Hypixel Says'
let subServerName = 'Hypixel Says'
let subServerCode = 'arcade_simon_says'
let subServerId = 'mini51BH'
let date = '19 January 2022'
let recorder = 'NVIDIA ShadowPlay'

let extraDesc = [
	'Keep in mind that the game name is "Santa Says" during the Christmas season.',
	extraDescTemplate['480pto720pUpscale'],
	// extraDescTemplate['copyrightMuted']
]

let title = `[${gameInfo.abb}] ${subServerName} Gameplay #${id}`

let description = `This is a play of ${subServerName}, a minigame of ${serverInfo.name}, a ${gameInfo.name} server. Played on ${date}.`

if (extraDesc.length) description += '\n\n' + extraDesc.join('\n\n')

description += `\n\nGame: ${gameInfo.fullName}
Game Version: ${gameInfo.version}
Server: ${serverInfo.fullName} (${serverInfo.ip})
Sub-Server: ${subServerFullName} (${subServerCode}, ${subServerId})
Date: ${date}
Recorder: ${recorder}`

printInfo(title, description)
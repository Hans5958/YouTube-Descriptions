import printInfo from '../modules/pretty-print-info.js'
import extraDescTemplate from '../modules/extra-desc.js'

import {mc8 as gameInfo} from './modules/game-info.js'
import {hypixel as serverInfo} from './modules/server-info.js'

let id = 11
let subServerFullName = 'Arcade/Hypixel Says'
let subServerName = 'Hypixel Says'
let subServerCode = 'arcade_simon_says'
let subServerId = 'mini' + '342M'
let date = '29 December 2022'
let recorder = 'Open Broadcaster Software (OBS Studio)'
let rank = 0

let extraDesc = [
	'Keep in mind that the game name is "Santa Says" during the Christmas season.',
	extraDescTemplate['480pto1080pUpscale'],
	// extraDescTemplate['copyrightMuted']
]

let title = `[${gameInfo.abb}] ${subServerName} Gameplay #${id}`

if (rank === 1) title += ' [Win]'
else if (rank === 2) title += ' [Runner-Up]'
else if (rank === 3) title += ' [Third Place]'

let description = `This is a replay of ${subServerName}, a minigame of ${serverInfo.name}, a ${gameInfo.name} server. Played on ${date}.`

if (extraDesc.length) description += '\n\n' + extraDesc.join('\n\n')

description += `\n\nGame: ${gameInfo.fullName}
Game Version: ${gameInfo.version}
Server: ${serverInfo.fullName} (${serverInfo.ip})
Sub-Server: ${subServerFullName} (${subServerCode}, ${subServerId})
Date: ${date}
Recorder: ${recorder}`

printInfo(title, description)
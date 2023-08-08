import printInfo from '../modules/pretty-print-info.js'
import extraDescTemplate from '../modules/extra-desc.js'

import {mcb17 as gameInfo} from './modules/game-info.js'
import {mineplexb as serverInfo} from './modules/server-info.js'

let id = 6
let subServerFullName = 'Block Hunt'
let subServerName = 'Block Hunt'
let map = 'Mesa Village'
let date = '4 January 2022'
let recorder = 'NVIDIA ShadowPlay'

let extraDesc = [
	"This is played in latest version where the block-disguised hiders still visible. Versions after that has the block-disguised hiders invisible (the animal-disguised hiders still visible). This is why the hunters can't see the hiders going near them, and like to spam arrows in hopes of hitting the invisible hiders.",
	extraDescTemplate['480pto720pUpscale'],
	// extraDescTemplate['copyrightMuted']
]

let title = `[${gameInfo.abb}] ${serverInfo.name}'s ${subServerName} Gameplay #${id} [${map}]`

let description = `This is a replay of ${subServerName}, a minigame of ${serverInfo.name}, a ${gameInfo.name} server. Played on ${date}.`

if (extraDesc.length) description += '\n\n' + extraDesc.join('\n\n')

description += `\n\nGame: ${gameInfo.fullName}
Game Version: ${gameInfo.version}
Server: ${serverInfo.fullName} (${serverInfo.ip})
Sub-Server: ${subServerFullName}
Map: ${map}
Date: ${date}
Recorder: ${recorder}`

printInfo(title, description)
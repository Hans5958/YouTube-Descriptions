import printInfo from '../modules/pretty-print-info.js'
import extraDescTemplate from '../modules/extra-desc.js'

import {mcblatest as gameInfo} from './modules/game-info.js'
import {hiveb as serverInfo} from './modules/server-info.js'

let date = '29 December 2022'
let recorder = 'Open Broadcaster Software (OBS Studio)'

let extraDesc = [
	extraDescTemplate['480pto1080pUpscale'],
	// extraDescTemplate['copyrightMuted']
]

let title = ``

title = `[${gameInfo.abb}] ${title}`

let description = `This is a replay of ${serverInfo.name}, a ${gameInfo.name} server. Played on ${date}.`

if (extraDesc.length) description += '\n\n' + extraDesc.join('\n\n')

description += `\n\nGame: ${gameInfo.fullName}
Game Version: ${gameInfo.version}
Server: ${serverInfo.fullName} (${serverInfo.ip})
Date: ${date}
Recorder: ${recorder}`

printInfo(title, description)
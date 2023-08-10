import printInfo from '../modules/pretty-print-info.js'
import extraDescTemplate from '../modules/extra-desc.js'

import {roblox as gameInfo} from './modules/game-info.js'
import serverInfos from './modules/server-info.js'

const server = "DW"
// console.log(serverInfos)
const serverInfo = serverInfos[server]

let title = `[${gameInfo.abb}] ...`

const date = "2023/07/10"
const recorder = 'Open Broadcaster Software (OBS Studio)'

let description = `This is a replay of ${serverInfo.name}, a game on Roblox. Played on ${date}.`

description += `\n\nGame: ${gameInfo.fullName}
Experience: ${serverInfo.name} (https://www.roblox.com/games/${serverInfo.id})
Date: ${date}
Recorder: ${recorder}
`

printInfo(title, description)
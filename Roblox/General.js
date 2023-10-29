import printInfo from '../modules/pretty-print-info.js'
import extraDescTemplate from '../modules/extra-desc.js'

import {roblox as gameInfo} from './modules/game-info.js'
import serverInfos from './modules/server-info.js'

const server = "Arsenal"
// console.log(serverInfos)
const serverInfo = serverInfos[server]

let title = `[${gameInfo.abb}] ...`

const dateStr = "2023/01/14"
const date = new Date(dateStr).toLocaleDateString('en-UK',  { year: 'numeric', month: 'long', day: 'numeric' })
const recorder = 'Open Broadcaster Software (OBS Studio)'

let description = `This is a replay of ${serverInfo.name}, a game on Roblox. Played on ${date}.`

description += `\n\nGame: ${gameInfo.fullName}
Experience: ${serverInfo.name} (https://www.roblox.com/games/${serverInfo.id})
Date: ${date}
Recorder: ${recorder}
`

printInfo(title, description)
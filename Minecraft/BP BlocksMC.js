import printInfo from '../modules/pretty-print-info.js'
import extraDescTemplate from '../modules/extra-desc.js'

import {mc12 as gameInfo} from './modules/game-info.js'
import {blocksmc as serverInfo} from './modules/server-info.js'

let id = 1
let subServerFullName = 'BlockParty'
let subServerName = 'BlockParty'
let subServerId = 'mini484v'
let date = '3 January 2022'
let recorder = 'NVIDIA ShadowPlay'

let extraDesc = [
	// extraDescTemplate['480pto720pUpscale']
	"This game is a copy of HiveMC's BlockParty. However, I'm uncertain if the map is also copied. I use the same resource pack and the same strats. See also my Hypixel's Pixel Party gameplays."
]

let key = [
	// ['0.5s', 'The last round is 0.5 seconds long. (round 24-25)'],
	// ['1s', 'The last round is 1 second long. (round 22-23)'],
	// ['1.5s', 'The last round is 1.5 seconds long. (round 20-21)'],
	// ['Choke Lose', 'The game is winnable, but I lost because I messed up badly.'],
	// ['Choke Tie', 'The game is winnable, but I lost because I messed up badly, while still getting a tie.'],
	// ['Clutch Win', 'The game is won under significant pressure. (requires fast moves, has far distance, etc)'],
	// ['Bad Luck Lose', 'The game is lost due to to bad luck.'],
	// ['Bad Luck Tie', "The game's result is a tie due to bad luck."],
	// ['Lose', 'The game is lost.'],
	// ['Win', 'The game is won.'],
	['Tie', "I am certain that both or all of us fell, but the game it is either won or lost."],
]

let title = `[${gameInfo.abb}] ${serverInfo.name}'s ${subServerName} Gameplay #${id} [${key.map(arr => arr[0]).join(' ')}]`

let description = `This is a play of ${subServerName}, a minigame of ${serverInfo.name}, a ${gameInfo.name} server. Played on ${date}.`

if (extraDesc.length) description += '\n\n' + extraDesc.join('\n\n')

description += `\n\nGame: ${gameInfo.fullName}
Game Version: ${gameInfo.version}
Server: ${serverInfo.fullName} (${serverInfo.ip})
Sub-Server: ${subServerFullName} (${subServerId})
Date: ${date}
Recorder: ${recorder}`

if (key.length) description += '\n\n' + `Key Description (keep in mind that this is subjective): 
${'- '+key.map(arr => arr[0] + ': ' + arr[1]).join('\n- ')}`

printInfo(title, description)
import printInfo from '../modules/pretty-print-info.js'
import extraDescTemplate from '../modules/extra-desc.js'

import {mc8 as gameInfo} from './modules/game-info.js'
import {hypixel as serverInfo} from './modules/server-info.js'

let id = 51
let subServerFullName = 'Prototype/Pixel Party'
let subServerName = 'Pixel Party'
let subServerCode = 'prototype_pixel_party'
let subServerId = 'mini' + '832R'
let date = '14 May 2022'
let recorder = 'NVIDIA ShadowPlay'

let extraDesc = [
	// "This is the third installment of a impromptu battle between me and cm_pro_gamers.",
	"This game is similar to HiveMC's BlockParty. I use the same resource pack and the same strats.",
	// "This game features Bowshot, a Twitch streamer (Yes, a Twitch streamer has a YT rank. How helpful!). View his POV here: https://www.twitch.tv/videos/1303041048?t=04h36m52s",
	// extraDescTemplate['copyrightMuted'],
	extraDescTemplate['privacyMuted'],
	extraDescTemplate['480pto720pUpscale'],
]

let key = [
	// ['0.5s', 'The last round is 0.5 seconds long. (round 24-25)'],
	// ['1s', 'The last round is 1 second long. (round 22-23)'],
	['1.5s', 'The last round is 1.5 seconds long. (round 20-21)'],
	// ['Choke Lose', 'The game is winnable, but I lost because I messed up badly.'],
	// ['Choke Tie', 'The game is winnable, but I lost because I messed up badly, while still getting a tie.'],
	// ['Clutch Win', 'The game is won under significant pressure/with close calls.'],
	// ['Bad Luck Lose', 'The game is lost due to to bad luck.'],
	// ['Bad Luck Tie', "The game's result is a tie due to bad luck."],
	// ['Lose', 'The game is lost.'],
	['Win', 'The game is won.'],
	// ['Tie', "The game's result is a tie."],
]

let title = `[${gameInfo.abb}] ${serverInfo.name}'s ${subServerName} Gameplay #${id} [${key.map(arr => arr[0]).join(' ')}]`

let description = `This is a play of ${subServerName}, a minigame of ${serverInfo.name}, a ${gameInfo.name} server. Played on ${date}.`

if (extraDesc.length) description += '\n\n' + extraDesc.join('\n\n')

description += `\n\nGame: ${gameInfo.fullName}
Game Version: ${gameInfo.version}
Server: ${serverInfo.fullName} (${serverInfo.ip})
Sub-Server: ${subServerFullName} (${subServerCode}, ${subServerId})
Date: ${date}
Recorder: ${recorder}`

if (key.length) description += '\n\n' + `Key Description (keep in mind that some may be subjective): 
${'- '+key.map(arr => arr[0] + ': ' + arr[1]).join('\n- ')}`

printInfo(title, description)
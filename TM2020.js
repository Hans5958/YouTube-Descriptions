import printInfo from './modules/pretty-print-info.js'
import extraDescTemplate from './modules/extra-desc.js'
import axios from 'axios'

// import {tmnf as gameInfo} from './modules/game-info.js'

let trackName = 'Training - 01!!'
let trackAuthor = 'Ubisoft Nadeo!!'
let trackLink = 'https://trackmania.exchange/maps/1984/training-01'
let recordTime = '7.512'
let date = '17 January 2023'
let recorder = 'NVIDIA ShadowPlay'

if (trackLink) {
	let id = trackLink.split('/')[4]
	console.log("Getting metadata from TMX...")
	const response = await axios.get(`https://trackmania.exchange/api/maps/get_map_info/id/${id}`)
	trackName = response.data?.Name || trackName
	trackAuthor = response.data?.Username || trackAuthor
}

let title = `[TM2020] ${trackName} in ${recordTime}`

const description = `Game: Trackmania (2020)
Track Name: ${trackName}
Track Author: ${trackAuthor}
Track Link: ${trackLink}
Record Time: ${recordTime} 
Date: ${date}
Recorder: ${recorder}`

printInfo(title, description)
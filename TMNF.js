import printInfo from './modules/pretty-print-info.js'
import extraDescTemplate from './modules/extra-desc.js'
import axios from 'axios'

// import {tmnf as gameInfo} from './modules/game-info.js'

let trackName = '16th of April'
let trackAuthor = 'Gekko12482'
let trackLink = 'https://tmnf.exchange/trackshow/19424'
let recordTime = '28.83'
let date = '24 January 2022'
let recorder = 'NVIDIA ShadowPlay'

if (trackLink) {
	let id = trackLink.split('trackshow/')[1]
	console.log("Getting metadata from TMX...")
	const response = await axios.get(`https://tmnf.exchange/api/tracks?id=${id}&fields=TrackName,Uploader.Name`)
	trackName = response.data?.Results?.[0]?.TrackName || trackName
	trackAuthor = response.data?.Results?.[0]?.Uploader.Name || trackAuthor
}

let title = `[TMNF] ${trackName} in ${recordTime}`

const description = `Game: TrackMania Nations Forever
Track Name: ${trackName}
Track Author: ${trackAuthor}
Track Link: ${trackLink}
Record Time: ${recordTime} 
Date: ${date}
Recorder: ${recorder}`

printInfo(title, description)
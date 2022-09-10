import printInfo from './modules/pretty-print-info.js'
import extraDescTemplate from './modules/extra-desc.js'

// import {tmnf as gameInfo} from './modules/game-info.js'

let trackName = 'B14-Speed'
let trackAuthor = 'Nadeo'
let trackLink = 'https://tmnf.exchange/trackshow/2321'
let recordTime = '32.61'
let date = '24 November 2021'
let recorder = 'NVIDIA ShadowPlay'

let title = `[TMNF] ${trackName} in ${recordTime}`

const description = `Game: TrackMania Nations Forever
Track Name: ${trackName}
Track Author: ${trackAuthor}
Track Link: ${trackLink}
Record Time: ${recordTime} 
Date: ${date}
Recorder: ${recorder}`

printInfo(title, description)
import printInfo from './modules/pretty-print-info.js'

let songTitle = "Moskau"
let fileName = "Dschinghis Khan - Moskau Black V2 Final.mid"
let fileSize = "136 MB"
let fileAuthor = "Carlos S. M."
let originalLink = "https://youtu.be/IdjEAhfYlak"
let notes = 17889268
let runType = "Legit Run"

const getShortForm = num => {
	let numStr = (num / 10**(Math.floor((num.toString().length - 1) / 3)*3)).toPrecision(3)
	let letter = ['', 'k', 'm', 'b', 't'][Math.floor((num.toString().length - 1) / 3)]
	if (letter) numStr += letter
	return numStr
}

let notesLong = notes.toLocaleString()
let notesShort = getShortForm(notes)

let videoSource = [
	"Piano From Above v1.1.0 (w/ WinMMWRP)",
	// "NVIDIA ShadowPlay"
	"Open Broadcaster Software (OBS) v30.1.2"
]

let audioSource = [
	"OmniMIDI v14.8.4"
]

let soundfont = [
	// "xp50houz",
	// "Keppy's Steinway Piano/Steinway D-274 — 7.4 Dream",
	// "K-Bass Deluxe 3 — Concert (default) (by Lil Blue_Inkling/Pon MIDIS)",
	// "Arachno SoundFont 1.0",
	"Yamaha C3 Neo Grand Piano"
]

let description = `
An arrangement by Carlos S. M.. I would say that it is quite repetitive, but hey, I liked the song.

In this edition on Soundfont Exploration, we got Yamaha C3 Neo Grand Piano from 27, a newer one from him/her. I'd say it has a unique tone, but that would be kind of boring. Hear it by yourself, especially in such long arrangement.
`.trim()
let title = `[Black MIDI] ${songTitle} (${notesShort}) — ${runType}`

// This run is done for a comparison, as seen on https://www.youtube.com/watch?v=012pMquzhhM.

// This run is done for a comparison. The video hasn't been made, and I will add the link to the video if it is up.

description += `

━━━━━━━━

## Technical Information

File Name: ${fileName}
File Size: ${fileSize}
Note Count: ${notesLong} (${notesShort})
Author: ${fileAuthor}
Original Video/Link: ${originalLink}

Video Source: ${videoSource.join(', ')}
Audio Source: ${audioSource.join(', ')}
Soundfont: ${soundfont.join(', ')}`

description += `

## Specifications (Acer Nitro 5 AN515-57, modified)

CPU: Intel Core i7-11800H @ 2.3 GHz
RAM: 32 GB (2 x 16 GB) DDR4 SDRAM @ 3200 MHz (dual channel)
Storage: 512 GB + 1 TB NVMe SSD
GPU: NVIDIA GeForce RTX 3060 Laptop GPU
OS: Windows 10 Home Single Language x64 (22H2; OS Build 19045.4529)
Resolution: 1920x1080`

printInfo(title, description)
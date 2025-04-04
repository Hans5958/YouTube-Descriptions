import printInfo from './modules/pretty-print-info.js'

let songTitle = "Highscore"
let fileName = "Highscore M4 F1.mid"
let fileSize = "289 MB"
let fileAuthor = "fds MIDIs/devised_definition, Planet Hero"
let originalLink = "https://youtu.be/Cgxq2jc1mRM"
let notes = 37858993
let runType = "Legit Run (Guest PC 1)"

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
	"Open Broadcaster Software (OBS) v30.2.2"
]

let audioSource = [
	"OmniMIDI v14.8.5"
]

let soundfont = [
	// "xp50houz",
	"Keppy's Steinway Piano/Steinway D-274 — 7.4 Dream",
	// "K-Bass Deluxe 3 — Concert (default) (by Lil Blue_Inkling/Pon MIDIS)",
	// "Arachno SoundFont 1.0",
	// "Yamaha C3 Neo Grand Piano"
	// "LSP Mixable Concert Grand (unknown ver., possibly 1.2.9), No Reverb, SR1928"
]

let description = `
Let's do something different. I got an access to this office PC. It's an Acer Veriton X, has the 12th generation of i7, and by comparing the runs that I did here with my laptop, it's more powerful, somehow (generation differences? laptop vs PC?). 

I got time to do some Black MIDIs here, as well as doing runs for comparisons. Since the access is just temporary, I call it a Guest PC, as in, this PC is a guest on this channel. All of this is recorded on August 2024.`.trim()
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

## Specifications (Acer Veriton X, unknown variation)

CPU: Intel Core i7-12700 @ 2.1 GHz (no overclock)
RAM: 16 GB DDR4 SDRAM @ 3200 MHz
Storage: 2 TB SATA HDD
GPU: Intel UHD Graphics 770 (integrated)
OS: Windows 11 Home Single Language x64 (23H2; OS Build 22631.3880)
Resolution: 1920x1080`

printInfo(title, description)
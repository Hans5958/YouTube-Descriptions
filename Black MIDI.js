import printInfo from './modules/pretty-print-info.js'

let songTitle = "LamazeP - Triple Baka"
let fileName = "Triple Baka collaboration with OddPandemonium03 and NewFall2021 - Final 1.mid"
let fileSize = "5,23 MB"
let fileAuthor = "OddPandemonium03, NewFall2021, DannyG"
let originalLink = "https://www.youtube.com/watch?v=JHZKxcYKz-0"
let notesLong = "682.935"
let notesShort = "683k"
let runType = "Legit Run"

let videoSource = [
	"Piano From Above",
	"NVIDIA ShadowPlay"
	// "Open Broadcaster Software (OBS)"
]

let audioSource = [
	"OmniMIDI"
]

let soundfont = [
	"xp50houz"
]

let title = `[Black MIDI] ${songTitle} (${notesShort}) — ${runType}`
let description = `Here's another relatively new Black MIDI song. It's a collaboration of OddPandemonium03 and NewFall2021. Quite new members, but quite nice arrangement.`

description += `

━━━━━━━━

Technical Information:

MIDI Name: ${fileName}
MIDI Size: ${fileSize}
MIDI Note Count: ${notesLong} (${notesShort})
MIDI Author: ${fileAuthor}
Original Video/Link: ${originalLink}

Video Source: ${videoSource.join(', ')}
Audio Source: ${audioSource.join(', ')}
Soundfont: ${soundfont.join(', ')}`

description += `

Specifications (Acer Nitro 5 AN515-57):

CPU: Intel Core i7-11800H @ 2.3 GHz
RAM: 16 GB DDR4 SDRAM
Storage: 512 GB NVMe SSD
GPU: NVIDIA GeForce RTX 3060 Laptop GPU
OS: Windows 10 Home x64 (21H1)
Resolution: 1920x1080`

printInfo(title, description)
import printInfo from './modules/pretty-print-info.js'

let songTitle = "Hopes and Dreams & SAVE the World (Undertale)"
let fileName = "Undertale OST - Hopes and Dreams + Save the World.mid"
let fileSize = "2.25 MB"
let fileAuthor = "Jeffrey Zhou, Declan Grimshaw"
let originalLink = "https://youtu.be/8lRN4LcWVcM"
let notes = 295328
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
	"Piano From Above v1.1.0",
	// "NVIDIA ShadowPlay"
	"Open Broadcaster Software (OBS) v28.1.2"
]

let audioSource = [
	"OmniMIDI v14.6.10"
]

let soundfont = [
	// "xp50houz",
	// "Keppy's Steinway Piano/Steinway D-274 — 7.4 Dream",
	"K-Bass Deluxe 3 — Concert (default) (by Lil Blue_Inkling/Pon MIDIS)",
	// "Arachno SoundFont 1.0",
]

let description = `Here's an interesting one: This is blacked by Declan Grimshaw, now BusiedGem. I was checking my archives and found this song. I thought it is from the latter, but after a dive on the internet, it isn't. It doesn't mean that it is bad (it sounds nice!), but it's quite a shocker.

The featured soundfont for the "Soundfont Exploration" is K-Bass Deluxe III by Lil Blue_Inkling or Pon MIDIs. Taking samples from KSP, iirc, it tries to get closer to what Kryo Keys 2 sounds like. By the name, then it is, yeah, bassy, more than the latest KSP/D-274 version. It is a little bit too much, but that's because I'm not that into the bass stuff, and the community seemed liked it, but what do you think?

Since this soundfont is not that popular for you to download, you can visit https://lil-blueinkling.mrchb1.repl.co/ to get your copy of this.

Still here? The checks are red, that's for sure.`
let title = `[Black MIDI] ${songTitle} (${notesShort}) — ${runType}`

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
RAM: 16 GB DDR4 SDRAM @ 3200 MHz
Storage: 512 GB NVMe SSD
GPU: NVIDIA GeForce RTX 3060 Laptop GPU
OS: Windows 10 Home Single Language x64 (22H2; OS Build 19045.2364)
Resolution: 1920x1080`

printInfo(title, description)
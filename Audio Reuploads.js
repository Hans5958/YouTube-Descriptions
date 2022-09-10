import printInfo from './modules/pretty-print-info.js'

let songTitleFull = ""
let songTitle = "Hitman (FNB Release)"
let videoTitleAdditional = ""
let songArtist = "SMC5 feat. Phantasma"
let songAlbum = "Rivalries (Friday Night Bloxxin' Release)"
let songDate = "2022"
let copyrightYear = 2022

const songDateStr = new Date(songDate).toLocaleDateString('en-UK',  { year: 'numeric', month: 'long', day: 'numeric' })

let title
if (songTitleFull) {
	title = songTitleFull
} else {
	title = `${songArtist} – ${songTitle}`
	if (videoTitleAdditional) title += " " + videoTitleAdditional
}
let description = `Title: ${songTitle}
Artist: ${songArtist}
Album: ${songAlbum}
Date: ${songDateStr}`

printInfo(title, description)
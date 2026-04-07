// script.js

// Spotify Clone Functionality

// Variables
let currentTrackIndex = 0;
let isPlaying = false;
let volumeLevel = 1; // Volume level from 0 to 1
let playlist = [];

// Sample tracks
const tracks = [
    { title: 'Track 1', src: 'track1.mp3' },
    { title: 'Track 2', src: 'track2.mp3' },
    { title: 'Track 3', src: 'track3.mp3' }
];

// Initialize audio
const audio = new Audio();

// Load the current track
function loadTrack(index) {
    audio.src = tracks[index].src;
    audio.load();
}

// Play/pause track
function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
}

// Play the next track
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    togglePlayPause();
}

// Play the previous track
function previousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    togglePlayPause();
}

// Set volume
function setVolume(level) {
    volumeLevel = level;
    audio.volume = volumeLevel;
}

// Add track to playlist
function addToPlaylist(track) {
    playlist.push(track);
}

// Remove track from playlist
function removeFromPlaylist(track) {
    playlist = playlist.filter(t => t.title !== track.title);
}

// Event listeners
audio.addEventListener('ended', nextTrack);

// Initialize the first track
loadTrack(currentTrackIndex);

// Expose functions (for example, to bind to UI controls)

// Uncomment these lines to use with UI controls:
// document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);
// document.getElementById('nextBtn').addEventListener('click', nextTrack);
// document.getElementById('prevBtn').addEventListener('click', previousTrack);
// document.getElementById('volumeSlider').addEventListener('input', (e) => setVolume(e.target.value));
let audio = new Audio();
let currentTrackIndex = 0;
let tracks = [
    { src: 'assets/audio/song1.mp3', image: 'assets/images/album1.jpg', video: 'assets/videos/video1.mp4' },
    { src: 'assets/audio/song2.mp3', image: 'assets/images/album2.jpg', video: 'assets/videos/video2.mp4' },
    { src: 'assets/audio/song3.mp3', image: 'assets/images/album3.jpg', video: 'assets/videos/video3.mp4' }
];

let playBtn = document.getElementById('playBtn');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let volumeSlider = document.getElementById('volumeSlider');
let albumArt = document.getElementById('albumArt');
let backgroundVideo = document.getElementById('backgroundVideo');

// Play/Pause functionality
playBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playBtn.textContent = 'Play';
    }
});

// Next Track functionality
nextBtn.addEventListener('click', function() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playBtn.textContent = 'Pause';
});

// Prev Track functionality
prevBtn.addEventListener('click', function() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playBtn.textContent = 'Pause';
});

// Volume control
volumeSlider.addEventListener('input', function() {
    audio.volume = volumeSlider.value / 100;
});

// Load Track (Audio, Image, and Video)
function loadTrack(index) {
    let track = tracks[index];
    audio.src = track.src;
    albumArt.src = track.image;
    backgroundVideo.src = track.video;
}

loadTrack(currentTrackIndex); // Initial track load

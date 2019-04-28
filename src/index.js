const player = document.querySelector('.player');
const playPauseScreen = document.querySelector('.play-pause');
// const progressBar = document.querySelector('.progress');
// const muteButton = document.getElementById('mute-unmute');

const togglePlayPause = () => {
  if (player.paused) {
    playPauseScreen.className = 'play-pause in-progress';
    player.play();
  } else {
    playPauseScreen.className = 'play-pause paused';
    player.pause();
  }
};

playPauseScreen.addEventListener('click', togglePlayPause);

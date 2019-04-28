const player = document.querySelector('.player');
const playPauseScreen = document.querySelector('.play-pause');
const progressBar = document.querySelector('.progress');
const muteButton = document.getElementById('mute-unmute');

const togglePlayPause = () => {
  if (player.paused) {
    playPauseScreen.className = 'play-pause in-progress';
    player.play();
  } else {
    playPauseScreen.className = 'play-pause paused';
    player.pause();
  }
};

const toggleMute = () => {
  muteButton.className = player.muted ? 'not-muted' : 'muted';
  player.muted = !player.muted;
};

playPauseScreen.addEventListener('click', togglePlayPause);
muteButton.addEventListener('click', toggleMute);

player.addEventListener('timeupdate', () => {
  const progress = (player.currentTime / player.duration) * 100;
  console.log(player.currentTime);
  progressBar.setAttribute('style', `width: ${progress}%;`);
});

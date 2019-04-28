export default (source) => {
  // *****************************
  // Create elements
  // *****************************
  const entirePlayer = document.createElement('div');

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');

  const videoContainer = document.createElement('div');
  videoContainer.classList.add('video-container');

  const videoPlayer = document.createElement('div');
  videoPlayer.classList.add('video-player');

  const player = document.createElement('video');
  player.classList.add('player');
  player.muted = true;
  player.autoplay = true;
  player.src = source;

  const playPause = document.createElement('div');
  playPause.classList.add('play-pause', 'in-progress');

  const controls = document.createElement('div');
  controls.classList.add('controls');

  const buttons = document.createElement('div');
  buttons.classList.add('buttons');

  const muteUnmuteBtn = document.createElement('button');
  muteUnmuteBtn.id = 'mute-unmute';
  muteUnmuteBtn.classList.add('muted');

  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');

  const progress = document.createElement('div');
  progress.classList.add('progress');

  // *****************************
  // Set event handlers for elements
  // *****************************
  player.addEventListener('timeupdate', () => {
    const progressValue = (player.currentTime / player.duration) * 100;
    progress.setAttribute('style', `width: ${progressValue}%;`);
  });

  player.addEventListener('ended', () => {
    playPause.className = 'play-pause ended';
    console.log(player.paused);
  });

  muteUnmuteBtn.addEventListener('click', () => {
    muteUnmuteBtn.className = player.muted ? 'not-muted' : 'muted';
    player.muted = !player.muted;
  });

  playPause.addEventListener('click', () => {
    if (player.paused) {
      playPause.className = 'play-pause in-progress';
      player.play();
    } else {
      playPause.className = 'play-pause paused';
      player.pause();
    }
  });

  // *****************************
  // Compile player
  // *****************************

  entirePlayer.appendChild(mainContainer);
  mainContainer.appendChild(videoContainer);
  videoContainer.appendChild(videoPlayer);
  videoPlayer.appendChild(player);
  videoContainer.appendChild(playPause);
  mainContainer.appendChild(controls);
  controls.appendChild(buttons);
  buttons.appendChild(muteUnmuteBtn);
  controls.appendChild(progressBar);
  progressBar.appendChild(progress);

  // *****************************
  // Return player
  // *****************************
  return entirePlayer;
};

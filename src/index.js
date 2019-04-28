import initPlayer from './player';

const source = 'http://v1-rtc.1internet.tv/video/multibitrate/video/2018/12/13/3c7a1fae-88d5-48cb-a451-17fa7f8082ef_20180511_Dekabristi_new_950.mp4';

const player = initPlayer(source);
const main = document.getElementById('main');

main.appendChild(player);

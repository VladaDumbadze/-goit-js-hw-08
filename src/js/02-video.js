import Player from '@vimeo/player';
import { set } from 'lodash';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
 console.log(player)
player.on('timeupdate', throttle(onTimeUpdate, 1000) );

function onTimeUpdate(event) {
    localStorage.setItem("videoplayer-current-time", event.seconds)
    console.log(event);
};

if (localStorage.getItem("videoplayer-current-time")) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
};

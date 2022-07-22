import Vimeo from "@vimeo/player";

import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
const playerEl = new Vimeo(iframeEl);


playerEl.on('timeupdate', throttle(onPlayEl, 500));
function onPlayEl({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds)
}
    playerEl.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
import Vimeo from "@vimeo/player";

import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
const playerEl = new Vimeo(iframeEl);

const currentTimeEl = localStorage.getItem('videoplayer-current-time');

const onPlayEl = ({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
};

// playerEl.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

playerEl.setCurrentTime(currentTimeEl).then(function (seconds) {
    seconds = currentTimeEl
}).catch();

playerEl.on('timeupdate', throttle(onPlayEl, 500));

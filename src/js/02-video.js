import Vimeo from "@vimeo/player";

import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
const playerEl = new Vimeo(iframeEl);


const onPlayEl = ({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
};

// playerEl.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
playerEl.setCurrentTime(0).then(function () {
    localStorage.getItem('videoplayer-current-time')
});

playerEl.on('timeupdate', throttle(onPlayEl, 500));

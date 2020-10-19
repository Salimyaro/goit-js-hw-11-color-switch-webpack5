import refs from './js/refs';
import fn from './js/functions';

const { onStartClick, onStopClick } = fn;

refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick);

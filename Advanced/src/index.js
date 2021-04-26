
console.log('VideoJS test app');

import videojs from 'video.js';
import 'videojs-bitrate-graph';

let player = videojs('my-player');

console.log(player); // logs Player object with all its properties

player.bitrateGraph({ bitrates: [4, 8, 3, 13, 34] });

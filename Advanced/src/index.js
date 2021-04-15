
console.log('test');

import videojs from 'video.js';
import 'videojs-bitrate-graph';

let player = videojs('my-player');

console.log(player);

player.bitrateGraph();
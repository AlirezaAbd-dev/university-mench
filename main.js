'use strict';

/**
 * @type {HTMLAudioElement}
 */
const audioWhite = document.getElementById('audio-white');
/**
 * @type {HTMLAudioElement}
 */
const audioBlue = document.getElementById('audio-blue');
/**
 * @type {HTMLAudioElement}
 */
const audioRed = document.getElementById('audio-red');
/**
 * @type {HTMLAudioElement}
 */
const audioGreen = document.getElementById('audio-green');
/**
 * @type {HTMLAudioElement}
 */
const audioYellow = document.getElementById('audio-yellow');
const circles = document.querySelectorAll('.circle');

for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener('mouseover', (e) => {
    const role = e.target.dataset.role;
    audioWhite.pause();
    audioBlue.pause();
    audioGreen.pause();
    audioRed.pause();
    audioYellow.pause();

    audioWhite.currentTime = 0;
    audioBlue.currentTime = 0;
    audioGreen.currentTime = 0;
    audioRed.currentTime = 0;
    audioYellow.currentTime = 0;

    if (role === 'white') {
      audioWhite.play();
    } else if (role === 'blue') {
      audioBlue.play();
    } else if (role === 'green') {
      audioGreen.play();
    } else if (role === 'red') {
      audioRed.play();
    } else if (role === 'yellow') {
      audioYellow.play();
    }
  });
}

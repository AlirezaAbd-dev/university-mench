const audioWhite = document.getElementById('audio-white') as HTMLAudioElement;
const audioBlue = document.getElementById('audio-blue') as HTMLAudioElement;
const audioRed = document.getElementById('audio-red') as HTMLAudioElement;
const audioGreen = document.getElementById('audio-green') as HTMLAudioElement;
const audioYellow = document.getElementById('audio-yellow') as HTMLAudioElement;

const circles = document.querySelectorAll(
  '.circle',
) as NodeListOf<HTMLSpanElement>;

for (let i = 0; i < circles.length; i++) {
  circles.item(i).addEventListener('mouseover', () => {
    const role = circles.item(i).dataset?.role;
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

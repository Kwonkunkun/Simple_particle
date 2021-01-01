"use strict";

const bgSound = new Audio("./sound/background.mp3");
bgSound.loop = true;
bgSound.volume = 0.2;

export function playBackground() {
    playSound(bgSound);
}
export function stopBackground() {
    stopSound(bgSound);
}

function playSound(sound) {
    //sound.currentTime = 0;
    sound.play();
}

function stopSound(sound) {
    sound.pause();
}

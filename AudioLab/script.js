let audioElements = {};

function playAudio(audioId) {
    if (!audioElements[audioId]) {
        audioElements[audioId] = document.getElementById(audioId);
    }

    const audioElement = audioElements[audioId];// Reset the audio playback position
    audioElement.play();
}

function pauseAudio(audioId) {
    if (!audioElements[audioId]) {
        audioElements[audioId] = document.getElementById(audioId);
    }

    const audioElement = audioElements[audioId];
    audioElement.pause();
}
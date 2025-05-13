function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.currentTime = 0; // Allows playing multiple times quickly
    sound.play();
   }
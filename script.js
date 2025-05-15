const audio = document.getElementById("birthdayAudio");
const musicIcon = document.getElementById("musicIcon");
const surpriseDiv = document.getElementById("surprise");
const galleryDiv = document.getElementById("gallery");
const messageDiv = document.getElementById("messageBox");

// Start muted due to autoplay restrictions
audio.muted = true;

function toggleMusic() {
  if (audio.paused || audio.muted) {
    audio.muted = false;
    audio.play();
    musicIcon.src = "unmute.png";
  } else {
    audio.muted = true;
    musicIcon.src = "mute.png";
  }
}

function showSurprise() {
  surpriseDiv.classList.remove("hidden");
  galleryDiv.classList.add("hidden");
  messageDiv.classList.add("hidden");
}

function showGallery() {
  galleryDiv.classList.remove("hidden");
  surpriseDiv.classList.add("hidden");
  messageDiv.classList.add("hidden");
}

function showMessage() {
  messageDiv.classList.remove("hidden");
  galleryDiv.classList.add("hidden");
  surpriseDiv.classList.add("hidden");
}

let currentPhoto = 1;
const totalPhotos = 3;

function cyclePhotos() {
  currentPhoto = (currentPhoto % totalPhotos) + 1;
  document.getElementById("slideshow").src = `photo${currentPhoto}.jfif`;
}

setInterval(() => {
  if (!galleryDiv.classList.contains("hidden")) {
    cyclePhotos();
  }
}, 3000);

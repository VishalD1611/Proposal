const music = document.getElementById("music");
const searchBox = document.getElementById("searchBox");
const proposal = document.getElementById("proposal");
const yesMessage = document.getElementById("yesMessage");
const noBtn = document.getElementById("noBtn");
const photo = document.getElementById("photo");
const fireworks = document.getElementById("fireworks");
const imageWrapper = document.getElementById("imageWrapper");

const allowedNames = ["devarshi", "debu"];

/* Slideshow images (MATCH FILE NAMES EXACTLY) */
const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.JPG",
  "img5.JPG"
];

let imgIndex = 0;
let slideshowInterval = null;

/* Search logic */
function propose() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();

  if (allowedNames.includes(input)) {
    searchBox.style.display = "none";
    proposal.classList.remove("hidden");
  } else {
    alert("Hint: Try typing your name 💙");
  }
}

/* YES button */
function yes() {
  yesMessage.classList.remove("hidden");

  // show images + start slideshow
  imageWrapper.classList.remove("hidden");
  startSlideshow();

  // fireworks + music
  fireworks.classList.remove("hidden");
  music.play();
}

/* Slideshow */
function startSlideshow() {
  if (slideshowInterval) return;

  slideshowInterval = setInterval(() => {
    imgIndex = (imgIndex + 1) % images.length;
    photo.src = images[imgIndex];
  }, 3000);
}

/* NO button runs away */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

/* Floating hearts */
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 400);

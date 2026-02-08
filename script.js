const music = document.getElementById("music");
const searchBox = document.getElementById("searchBox");
const proposal = document.getElementById("proposal");
const yesMessage = document.getElementById("yesMessage");
const noBtn = document.getElementById("noBtn");
const photo = document.getElementById("photo");
const fireworks = document.getElementById("fireworks");

/* Allowed names */
const allowedNames = ["devarshi", "debu"];

/* Image slideshow */
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let imgIndex = 0;

setInterval(() => {
  imgIndex = (imgIndex + 1) % images.length;
  photo.src = images[imgIndex];
}, 3000);

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
  fireworks.classList.remove("hidden");
  music.play();
}

/* NO button runs away */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

/* Floating hearts generator */
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  heart.style.opacity = Math.random();
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 400);


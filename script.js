const music = document.getElementById("music");
const searchBox = document.getElementById("searchBox");
const proposal = document.getElementById("proposal");
const loveText = document.getElementById("loveText");
const imageWrapper = document.getElementById("imageWrapper");
const photo = document.getElementById("photo");
const heartBlast = document.getElementById("heartBlast");
const noBtn = document.getElementById("noBtn");

const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const allowedNames = ["devarshi", "debu"];
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.JPG", "img5.JPG"];
let imgIndex = 0;
let slideInterval = null;

/* Search */
function propose() {
  const val = document.getElementById("searchInput").value.trim().toLowerCase();
  if (allowedNames.includes(val)) {
    searchBox.style.display = "none";
    proposal.classList.remove("hidden");
  } else {
    alert("Hint: Try typing your name 💙");
  }
}

/* YES sequence */
function yes() {
  // ❤️ Heart blast
  heartBlast.classList.remove("hidden");

  // 🎵 Music
  music.play();

  // 💌 Show love text after blast
  setTimeout(() => {
    loveText.classList.remove("hidden");
  }, 1800);

  // 📸 Show image + slideshow after text
  setTimeout(() => {
    imageWrapper.classList.remove("hidden");
    photo.src = images[0];
    startSlideshow();
  }, 3500);

  // 🎆 Fireworks
  canvas.classList.remove("hidden");
  startFireworks();
}

/* Slideshow */
function startSlideshow() {
  if (slideInterval) return;
  slideInterval = setInterval(() => {
    imgIndex = (imgIndex + 1) % images.length;
    photo.src = images[imgIndex];
  }, 3000);
}

/* NO runs */
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * (window.innerWidth - 120) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 60) + "px";
});

/* 🎆 Simple firework */
let particles = [];

function blast(x, y) {
  for (let i = 0; i < 100; i++) {
    particles.push({
      x, y,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 5 + 2,
      life: 60,
      color: `hsl(${Math.random() * 360},100%,60%)`
    });
  }
}

function startFireworks() {
  setInterval(() => {
    blast(Math.random() * canvas.width, Math.random() * canvas.height * 0.4);
  }, 1000);
  animateFireworks();
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed + 0.3;
    p.life--;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    if (p.life <= 0) particles.splice(i, 1);
  });
  requestAnimationFrame(animateFireworks);
}

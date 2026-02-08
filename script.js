const music = document.getElementById("music");
const searchBox = document.getElementById("searchBox");
const proposal = document.getElementById("proposal");
const yesMessage = document.getElementById("yesMessage");
const noBtn = document.getElementById("noBtn");
const photo = document.getElementById("photo");

/* Slideshow images */
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let imgIndex = 0;

setInterval(() => {
  imgIndex = (imgIndex + 1) % images.length;
  photo.src = images[imgIndex];
}, 3000);

/* Start proposal */
function propose() {
  searchBox.style.display = "none";
  proposal.classList.remove("hidden");
  music.play();
  startConfetti();
}

/* YES button */
function yes() {
  yesMessage.classList.remove("hidden");
  launchFireworks();
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
  heart.style.transform = "scale(" + (0.6 + Math.random()) + ") rotate(45deg)";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 400);

/* Confetti */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let pieces = [];

function startConfetti() {
  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10,
      color: `hsl(${Math.random()*360},100%,60%)`
    });
  }
  animate();
}

function launchFireworks() {
  for (let i = 0; i < 300; i++) {
    pieces.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      r: Math.random() * 5 + 3,
      d: Math.random() * 15 + 5,
      color: `hsl(${Math.random()*360},100%,60%)`
    });
  }
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  pieces.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.y += p.d / 2;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(animate);
}


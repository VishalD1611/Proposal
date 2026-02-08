const music = document.getElementById("music");
const searchBox = document.getElementById("searchBox");
const proposal = document.getElementById("proposal");
const yesMessage = document.getElementById("yesMessage");
const noBtn = document.getElementById("noBtn");

/* Start Proposal */
function propose() {
  searchBox.style.display = "none";
  proposal.classList.remove("hidden");
  music.play();
  startConfetti();
}

/* YES Button */
function yes() {
  yesMessage.classList.remove("hidden");
  launchFireworks();
}

/* NO Button Runs Away */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

/* Dark Mode */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

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
      color: `hsl(${Math.random()*360},100%,50%)`
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

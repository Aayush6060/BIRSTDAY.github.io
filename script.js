function flipCard() {
  document.getElementById("birthdayCard").classList.add("flipped");
  typeWriter();
}

const message = `
Happy Birthday, Kalyani 🎂

You light up every space you walk into ✨  
Your smile is my favorite thing in the world 💕  
Today, the world celebrates YOU — and so do I ❤️

With all my love,
Your Aayush 💌`;

let i = 0;

function typeWriter() {
  const textBox = document.getElementById("typewriterText");
  if (i < message.length) {
    textBox.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

function showConfetti() {
  const container = document.getElementById("confetti-container");
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.style.backgroundColor = getRandomColor();
    container.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

function getRandomColor() {
  const colors = ["#ff99c8", "#ffc3a0", "#fcb0b3", "#ffe6e6", "#ffd1dc"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function showCake() {
  const cake = document.getElementById("cake");
  cake.style.display = "block";
}

function showILoveYou() {
  const love = document.getElementById("iloveyou");
  love.innerHTML = "HAPPY BIRTHDAY MY LOVE ❤️ 🎉";
  love.style.display = "block";
}

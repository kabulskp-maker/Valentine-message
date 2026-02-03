const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttons = document.getElementById("buttons");

const sliderBox = document.getElementById("sliderBox");
const slider = document.getElementById("slider");
const sliderText = document.getElementById("sliderText");

const final = document.getElementById("final");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let step = 1;

/* 🎵 MUSIC */
musicBtn.onclick = () => {
  if (music.paused) {
    music.play();
    musicBtn.innerText = "⏸ Pause Music";
  } else {
    music.pause();
    musicBtn.innerText = "▶️ Play Music";
  }
};

/* ❤️ QUESTION 1 */
question.innerText = "Shonaa my love… do you like me? 💖";

noBtn.onclick = () => {
  if (step === 1 || step === 3) {
    noBtn.style.position = "fixed";

    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 120);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // Bring YES to center
    yesBtn.style.position = "fixed";
    yesBtn.style.left = "50%";
    yesBtn.style.top = "70%";
    yesBtn.style.transform = "translateX(-50%) scale(1.15)";
  }
};

yesBtn.onclick = () => {
  if (step === 1) {
    alert("I don’t like you… I love you ❤️");
    step = 2;
    loadQ2();
  } else if (step === 3) {
    showFinal();
  }
};

/* 💕 QUESTION 2 (FIXED – NO BUTTONS HERE) */
function loadQ2() {
  question.innerText = "Shonaa… how much do you love me? 💕";

  // 🔥 HARD HIDE BUTTONS
  buttons.style.display = "none";

  // Reset button positions so they don’t float
  yesBtn.style.position = "relative";
  noBtn.style.position = "relative";

  sliderBox.classList.remove("hidden");
}

slider.oninput = () => {
  sliderText.innerText = `Only this much? (${slider.value}%)`;

  if (slider.value >= 100) {
    sliderText.innerText =
      "WOW 😭💖 You love me this much! (∞)";
    setTimeout(loadQ3, 1000);
  }
};

/* 💘 QUESTION 3 (CENTERED & CLEAN) */
function loadQ3() {
  step = 3;

  sliderBox.classList.add("hidden");

  // 🔥 SHOW BUTTONS AGAIN (CENTERED)
  buttons.style.display = "flex";

  yesBtn.style.position = "relative";
  noBtn.style.position = "relative";

  yesBtn.style.left = "";
  yesBtn.style.top = "";
  noBtn.style.left = "";
  noBtn.style.top = "";

  yesBtn.style.transform = "scale(1)";

  question.innerText =
    "Shonaa… will you be my Valentine on 14th Feb? 💘";
}

/* 💓 FINAL SCREEN */
function showFinal() {
  question.style.display = "none";
  buttons.style.display = "none";
  sliderBox.style.display = "none";

  final.classList.remove("hidden");
  document.body.classList.add("final-mode");

  setInterval(() => {
    const kiss = document.createElement("div");
    kiss.className = "kiss";
    kiss.innerText = "💋";
    kiss.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(kiss);
    setTimeout(() => kiss.remove(), 6000);
  }, 300);
}

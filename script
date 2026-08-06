const screens = {
  intro: document.getElementById("introScreen"),
  director: document.getElementById("directorScreen"),
  game: document.getElementById("gameScreen"),
};

const symbols = ["🦕", "🦖", "🥚", "🦴", "🌋", "❤️", "🍰", "🎟️", "🥦", "🐈", "🐈‍⬛"];
const systemMessages = [
  "Calculando cantidad óptima de mimitos...",
  "Consultando al Consejo Supremo Jurásico...",
  "Verificando nivel de amor de Cami... ERROR: valor demasiado alto.",
  "Detectando necesidad urgente de un abrazo... Confirmada.",
  "Incubando sorpresa...",
  "Advertencia: esta usuaria es demasiado linda para este software."
];

const prizes = [
  {
    title: "¡¡JACKPOT!!",
    icon: "💋",
    body: `
      <p>Ganaste un...</p>
      <p class="big-love">BESO PREMIUM</p>
      <p>Incluye:</p>
      <p>✔ 1 beso largo<br>✔ 3 besitos sorpresa<br>✔ Repeticiones ilimitadas</p>
    `
  },
  {
    title: "FELICIDADES",
    icon: "🍰",
    body: `
      <p>Ganaste un vale por:</p>
      <p class="big-love">Elegir el próximo postre.</p>
      <p><em>La administración se reserva el derecho a probar un poquito.</em></p>
    `
  },
  {
    title: "NOTIFICACIÓN DEL NIDITO",
    icon: "❤️🐈🐈‍⬛",
    body: `
      <p>Se detectó movimiento.</p>
      <p><strong>Pispo 🐈 y Chappell 🐈‍⬛ ya ocuparon sus puestos estratégicos.</strong></p>
      <p>Objetivo:</p>
      <p class="big-love">Recibir a mamá con besitos, ronroneos y muchísimo amor. ❤️</p>
    `
  },
  {
    title: "MENSAJE OCULTO",
    icon: "🥚",
    body: `
      <p>Si hoy fue un día feo, recordá que sigue existiendo una persona que piensa en vos incluso cuando están lejos.</p>
      <p class="big-love">❤️</p>
    `
  },
  {
    title: "DINO TERAPEUTA",
    icon: "🦕🩺",
    body: `
      <p><strong>Diagnóstico:</strong></p>
      <p>Nivel de cansancio:</p>
      <p class="meter">██████████ 98%</p>
      <p>Tratamiento recomendado:</p>
      <p>✔ Comer algo rico<br>✔ Descansar<br>✔ Hablar con Cami</p>
      <p><strong>Pronóstico:</strong> Excelente ❤️</p>
    `
  },
  {
    title: "VALE OFICIAL",
    icon: "🎟️",
    body: `
      <p>Canjeable por:</p>
      <p>🍦 Un helado<br>🎬 Elegir la próxima película<br>🫂 Un abrazo gigante</p>
      <p><strong>Vencimiento:</strong> Nunca.</p>
    `
  },
  {
    title: "GANASTE...",
    icon: "🥦",
    body: `
      <p class="big-love">Brócoli.</p>
      <p>...</p>
      <p>JAJAJA NO.</p>
      <p>Era una broma.</p>
      <p class="big-love">❤️ TE AMO MUCHÍSIMO ❤️</p>
    `
  },
  {
    title: "PREMIO LEGENDARIO",
    icon: "🦖🏆",
    legendary: true,
    body: `
      <p>El Consejo Supremo de los Dinosaurios decidió entregarte el premio más raro.</p>
      <p><strong>Tu misión para hoy:</strong></p>
      <p>✔ Sobrevivir al día.<br>✔ Después dejarte querer muchísimo por Cami.</p>
    `
  }
];

let spinning = false;
let coins = 0;
let spins = 0;
let dragging = false;
let startY = 0;
let leverY = 16;

const startBtn = document.getElementById("startBtn");
const enterCasinoBtn = document.getElementById("enterCasinoBtn");
const leverKnob = document.getElementById("leverKnob");
const leverTrack = document.getElementById("leverTrack");
const coinCount = document.getElementById("coinCount");
const systemMessage = document.getElementById("systemMessage");
const modal = document.getElementById("prizeModal");
const closePrizeBtn = document.getElementById("closePrizeBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const prizeTitle = document.getElementById("prizeTitle");
const prizeIcon = document.getElementById("prizeIcon");
const prizeBody = document.getElementById("prizeBody");
const secretChest = document.getElementById("secretChest");
const openChestBtn = document.getElementById("openChestBtn");

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
}

startBtn.addEventListener("click", () => showScreen("director"));
enterCasinoBtn.addEventListener("click", () => showScreen("game"));

function randomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function setReels(a, b, c) {
  document.getElementById("reel1").textContent = a;
  document.getElementById("reel2").textContent = b;
  document.getElementById("reel3").textContent = c;
}

function startSpin() {
  if (spinning || modal.classList.contains("show")) return;
  spinning = true;
  spins += 1;
  coins += 10;
  coinCount.textContent = coins;
  systemMessage.textContent = systemMessages[Math.floor(Math.random() * systemMessages.length)];

  const reelEls = [1,2,3].map(i => document.getElementById(`reel${i}`));
  reelEls.forEach(el => el.classList.add("spinning"));

  const interval = setInterval(() => {
    setReels(randomSymbol(), randomSymbol(), randomSymbol());
  }, 90);

  setTimeout(() => {
    clearInterval(interval);
    reelEls.forEach(el => el.classList.remove("spinning"));

    const prize = choosePrize();
    const finalSymbols = prize.legendary ? ["🦖", "🏆", "🦖"] : [randomSymbol(), randomSymbol(), randomSymbol()];
    setReels(...finalSymbols);

    if (navigator.vibrate) navigator.vibrate([60, 40, 90]);
    setTimeout(() => showPrize(prize), 350);

    if (spins === 5) secretChest.classList.remove("hidden");
    spinning = false;
  }, 1400);
}

function choosePrize() {
  // 5% de probabilidad de premio legendario
  if (Math.random() < 0.05) return prizes[7];
  return prizes[Math.floor(Math.random() * 7)];
}

function showPrize(prize) {
  prizeTitle.textContent = prize.title;
  prizeIcon.textContent = prize.icon;
  prizeBody.innerHTML = prize.body;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  if (prize.legendary) launchConfetti(75);
}

function closePrize() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  systemMessage.textContent = "Bajá la palanca para recibir otro premio.";
}

closePrizeBtn.addEventListener("click", closePrize);
playAgainBtn.addEventListener("click", closePrize);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closePrize();
});

function updateLever(y) {
  const min = 16;
  const max = leverTrack.clientHeight - leverKnob.offsetHeight - 16;
  leverY = Math.max(min, Math.min(max, y));
  leverKnob.style.top = `${leverY}px`;
}

function beginDrag(clientY) {
  if (spinning) return;
  dragging = true;
  startY = clientY - leverY;
  leverKnob.classList.add("dragging");
}

function moveDrag(clientY) {
  if (!dragging) return;
  updateLever(clientY - startY);
}

function endDrag() {
  if (!dragging) return;
  dragging = false;
  leverKnob.classList.remove("dragging");
  const threshold = leverTrack.clientHeight * 0.63;
  const triggered = leverY >= threshold;
  leverKnob.style.transition = "top .28s ease";
  updateLever(16);
  setTimeout(() => leverKnob.style.transition = "", 300);
  if (triggered) startSpin();
}

leverKnob.addEventListener("pointerdown", (e) => {
  leverKnob.setPointerCapture(e.pointerId);
  beginDrag(e.clientY);
});
leverKnob.addEventListener("pointermove", (e) => moveDrag(e.clientY));
leverKnob.addEventListener("pointerup", endDrag);
leverKnob.addEventListener("pointercancel", endDrag);

// Permite también tocar la parte baja de la guía para bajar la palanca.
leverTrack.addEventListener("click", (e) => {
  if (e.target !== leverKnob && !spinning) {
    leverKnob.style.transition = "top .24s ease";
    updateLever(leverTrack.clientHeight - leverKnob.offsetHeight - 16);
    setTimeout(() => {
      updateLever(16);
      startSpin();
      setTimeout(() => leverKnob.style.transition = "", 300);
    }, 250);
  }
});

openChestBtn.addEventListener("click", () => {
  prizeTitle.textContent = "COFRE SECRETO";
  prizeIcon.textContent = "💌🦖";
  prizeBody.innerHTML = `
    <p>La máquina encontró un mensaje reservado exclusivamente para Pau.</p>
    <p class="big-love">No puedo hacer que todos los días sean fáciles, pero sí intentar que hoy termine con una sonrisa.</p>
    <p>Gracias por existir.</p>
    <p><strong>— Cami 🦖❤️</strong></p>
  `;
  modal.classList.add("show");
  launchConfetti(50);
});

function launchConfetti(amount) {
  const pieces = ["❤️","✨","🦖","💛","💖"];
  for (let i = 0; i < amount; i++) {
    const el = document.createElement("span");
    el.className = "confetti";
    el.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    el.style.left = `${Math.random() * 100}vw`;
    el.style.animationDuration = `${2.5 + Math.random() * 2.8}s`;
    el.style.fontSize = `${12 + Math.random() * 20}px`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 6000);
  }
}

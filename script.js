const screens = {
  intro: document.getElementById("introScreen"),
  director: document.getElementById("directorScreen"),
  game: document.getElementById("gameScreen"),
};

/* ========== SYMBOLS & MATCHES ========== */
const symbols = ["🦕","🦖","🥚","🦴","🌋","❤️","🍰","🎟️","🥦","🐈","🐈‍⬛"];

const systemMessages = [
  "Calculando cantidad óptima de mimitos...",
  "Consultando al Consejo Supremo Jurásico...",
  "Verificando nivel de amor de Cami... ERROR: valor demasiado alto.",
  "Detectando necesidad urgente de un abrazo... Confirmada.",
  "Incubando sorpresa...",
  "Advertencia: esta usuaria es demasiado linda para este software.",
  "Cargando dosis de cariño...",
  "Nivel de merecimiento de premio: MÁXIMO.",
  "Alerta: niveles de ternura superiores al promedio.",
  "Consultando base de datos de mimos disponibles...",
];

/* ========== PRIZE POOLS ========== */
// No-match prizes (when all 3 are different) — big variety pool
const noMatchPrizes = [
  { title:"CONSUELO JURÁSICO", icon:"🦕", rarity:"common", coins:5,
    body:`<p>No hubo match, pero el dino gerente te envía:</p><p class="big-love">Una caricia virtual 💛</p><p>Intentá de nuevo, esta máquina es generosa.</p>` },
  { title:"MENSAJE INTERCEPTADO", icon:"📡", rarity:"common", coins:8,
    body:`<p>Se interceptó una transmisión del Período Jurásico:</p><p class="big-love">"Decile a la humana que la quiero mucho."</p><p>— Firmado: un velociraptor anónimo 🦖</p>` },
  { title:"CUPÓN DE EMERGENCIA", icon:"🆘", rarity:"common", coins:5,
    body:`<p>Válido por:</p><p>🫂 Un abrazo de emergencia<br>🛋️ 10 minutos de no hacer nada juntas<br>☕ Un café hecho con amor</p>` },
  { title:"DATO CURIOSO", icon:"🧠", rarity:"common", coins:10,
    body:`<p><strong>¿Sabías que...</strong></p><p>Los dinosaurios existieron durante 165 millones de años.</p><p>Pero el amor de Cami por vos se siente como si fuera desde antes del Big Bang. 💥❤️</p>` },
  { title:"NOTICIA DE ÚLTIMO MOMENTO", icon:"📰", rarity:"common", coins:5,
    body:`<p><strong>BREAKING NEWS</strong></p><p>Se confirma que Paula es oficialmente la persona más linda que existe.</p><p class="big-love">Fuente: Cami, 2026.</p>` },
  { title:"HORÓSCOPO JURÁSICO", icon:"🔮", rarity:"common", coins:8,
    body:`<p><strong>Tu horóscopo de hoy:</strong></p><p>⭐ Amor: nivel máximo (gracias a Cami).<br>⭐ Suerte: altísima (llegaste a esta pantalla).<br>⭐ Energía: se recarga con cada giro. 🦖</p>` },
  { title:"DELIVERY PREHISTÓRICO", icon:"📦", rarity:"common", coins:5,
    body:`<p>Tu pedido ha sido despachado:</p><p>📦 1 cajita de mimos<br>📦 1 paquete de besitos<br>📦 1 dosis de "te amo"</p><p><strong>Estado:</strong> en camino a tus brazos. 💛</p>` },
  { title:"ALERTA METEOROLÓGICA", icon:"🌤️", rarity:"common", coins:10,
    body:`<p><strong>Pronóstico para hoy:</strong></p><p>☁️ Nublado al principio...<br>🌤️ ...pero con muchas posibilidades de sonrisas por la tarde.<br>💛 100% de probabilidad de amor.</p>` },
  { title:"MEMO INTERNO", icon:"📋", rarity:"common", coins:5,
    body:`<p><strong>De:</strong> Departamento de Cariño<br><strong>Para:</strong> Paula<br><strong>Asunto:</strong> Recordatorio</p><p class="big-love">Sos increíble incluso en los días difíciles. ❤️</p>` },
  { title:"WIFI JURÁSICO", icon:"📶", rarity:"common", coins:8,
    body:`<p>Conexión establecida con:</p><p class="big-love">Red: "TeAmoMucho_5G" 📶</p><p>Señal: MÁXIMA<br>Velocidad: infinita<br>Contraseña: no hace falta, es amor libre. 💛</p>` },
];

// 2-match prizes (two symbols match)
const twoMatchPrizes = [
  { title:"¡¡JACKPOT!!", icon:"💋", rarity:"rare", coins:25,
    body:`<p>Ganaste un...</p><p class="big-love">BESO PREMIUM</p><p>Incluye:</p><p>✔ 1 beso largo<br>✔ 3 besitos sorpresa<br>✔ Repeticiones ilimitadas</p>` },
  { title:"FELICIDADES", icon:"🍰", rarity:"rare", coins:20,
    body:`<p>Ganaste un vale por:</p><p class="big-love">Elegir el próximo postre.</p><p><em>La administración se reserva el derecho a probar un poquito.</em></p>` },
  { title:"NOTIFICACIÓN DEL NIDITO", icon:"❤️🐈🐈‍⬛", rarity:"rare", coins:25,
    body:`<p>Se detectó movimiento.</p><p><strong>Pispo 🐈 y Chappell 🐈‍⬛ ya ocuparon sus puestos estratégicos.</strong></p><p>Objetivo:</p><p class="big-love">Recibir a mamá con besitos, ronroneos y muchísimo amor. ❤️</p>` },
  { title:"VALE OFICIAL", icon:"🎟️", rarity:"rare", coins:20,
    body:`<p>Canjeable por:</p><p>🍦 Un helado<br>🎬 Elegir la próxima película<br>🫂 Un abrazo gigante</p><p><strong>Vencimiento:</strong> Nunca.</p>` },
  { title:"DINO TERAPEUTA", icon:"🦕🩺", rarity:"rare", coins:25,
    body:`<p><strong>Diagnóstico:</strong></p><p>Nivel de cansancio:</p><p class="meter">██████████ 98%</p><p>Tratamiento recomendado:</p><p>✔ Comer algo rico<br>✔ Descansar<br>✔ Hablar con Cami</p><p><strong>Pronóstico:</strong> Excelente ❤️</p>` },
  { title:"NOCHE DE PELIS", icon:"🎬🍿", rarity:"rare", coins:30,
    body:`<p>El Casino Jurásico te otorga:</p><p class="big-love">NOCHE DE PELIS OBLIGATORIA</p><p>✔ Vos elegís la peli<br>✔ Pochoclo incluido<br>✔ Manta y acurrucarse: OBLIGATORIO</p>` },
  { title:"PASEO MISTERIOSO", icon:"🗺️", rarity:"rare", coins:25,
    body:`<p>Desbloqueaste:</p><p class="big-love">Un paseo sorpresa juntas</p><p>El destino lo elige Cami.<br>Dresscode: cómoda y linda (como siempre). 🦖💛</p>` },
];

// 3-match prizes (JACKPOT — all 3 match)
const threeMatchPrizes = [
  { title:"🏆 TRIPLE MATCH 🏆", icon:"🦖👑", rarity:"epic", coins:50,
    body:`<p>¡¡¡TRES IGUALES!!!</p><p class="big-love">CENA SORPRESA</p><p>Cami se encarga de TODO:<br>✔ Elegir el lugar<br>✔ Reservar<br>✔ Hacerte sentir la persona más especial del mundo</p>` },
  { title:"🏆 MEGA JACKPOT 🏆", icon:"💎", rarity:"epic", coins:50,
    body:`<p>¡¡¡TRIPLE!!!</p><p class="big-love">DÍA COMPLETO DE MIMOS</p><p>Un día entero donde Cami hace todo lo que vos quieras.<br>Sin excusas. Sin límites.<br>Solo amor. 💛🦖</p>` },
  { title:"🏆 SUPREMO 🏆", icon:"🌟", rarity:"epic", coins:50,
    body:`<p>El premio más raro de la máquina:</p><p class="big-love">CARTA DE AMOR ESCRITA A MANO</p><p>Cami va a sentarse y escribirte una carta de verdad, en papel, con toda la cursilería del mundo. 💌</p>` },
];

// Legendary (special trigger)
const legendaryPrize = {
  title:"⭐ PREMIO LEGENDARIO ⭐", icon:"🦖🏆", rarity:"legendary", coins:100,
  body:`<p>El Consejo Supremo de los Dinosaurios decidió entregarte el premio más raro que existe.</p>
    <p><strong>Tu misión para hoy:</strong></p>
    <p>✔ Sobrevivir al día.<br>✔ Después dejarte querer muchísimo por Cami.</p>
    <p class="big-love">Sos lo mejor que me pasó. 🦖❤️</p>`
};

const RESPIN_COST = 30;

let spinning = false;
let coins = 0;
let spins = 0;
let streak = 0;
let dragging = false;
let startY = 0;
let leverY = 16;
let lastPrizeIndex = -1;
let lastPool = null;
let currentFinalSymbols = [];
let canRespin = false;

const diagBtn = document.getElementById("diagBtn");
const diagResult = document.getElementById("diagResult");
const diagBar = document.getElementById("diagBar");
const scanResult = document.getElementById("scanResult");
const startBtn = document.getElementById("startBtn");
const enterCasinoBtn = document.getElementById("enterCasinoBtn");
const leverKnob = document.getElementById("leverKnob");
const leverTrack = document.getElementById("leverTrack");
const coinCount = document.getElementById("coinCount");
const coinsEl = document.getElementById("coinsDisplay");
const systemMessage = document.getElementById("systemMessage");
const modal = document.getElementById("prizeModal");
const closePrizeBtn = document.getElementById("closePrizeBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const prizeTitle = document.getElementById("prizeTitle");
const prizeIcon = document.getElementById("prizeIcon");
const prizeBody = document.getElementById("prizeBody");
const prizeRarity = document.getElementById("prizeRarity");
const coinReward = document.getElementById("coinReward");
const matchInfo = document.getElementById("matchInfo");
const secretChest = document.getElementById("secretChest");
const openChestBtn = document.getElementById("openChestBtn");
const respinBtns = document.querySelectorAll(".respin-btn");

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
}

/* ========== DIAGNÓSTICO ========== */
diagBtn.addEventListener("click", () => {
  diagBtn.classList.add("used");
  diagResult.classList.remove("hidden");
  requestAnimationFrame(() => { diagBar.style.width = "100%"; });
  setTimeout(() => {
    scanResult.textContent = "Resultado: necesita una dosis urgente de DinoSlots para alegrarse. 🦖";
    startBtn.classList.remove("hidden");
    startBtn.style.animation = "fadeInUp .5s ease forwards";
  }, 2000);
});

startBtn.addEventListener("click", () => showScreen("director"));
enterCasinoBtn.addEventListener("click", () => showScreen("game"));

/* ========== HELPERS ========== */
function randomSymbol() { return symbols[Math.floor(Math.random() * symbols.length)]; }
function setReel(i, sym) { document.getElementById(`reel${i+1}`).textContent = sym; }
function setReels(a,b,c) { setReel(0,a); setReel(1,b); setReel(2,c); }

function updateCoins(amount) {
  coins = Math.max(0, coins + amount);
  coinCount.textContent = coins;
  coinsEl.classList.remove("pop","spend");
  void coinsEl.offsetWidth;
  coinsEl.classList.add(amount > 0 ? "pop" : "spend");
}

function countMatches(syms) {
  if (syms[0] === syms[1] && syms[1] === syms[2]) return 3;
  if (syms[0] === syms[1] || syms[1] === syms[2] || syms[0] === syms[2]) return 2;
  return 0;
}

function pickFromPool(pool) {
  if (pool.length <= 1) return pool[0];
  let idx;
  let attempts = 0;
  do {
    idx = Math.floor(Math.random() * pool.length);
    attempts++;
  } while (pool === lastPool && idx === lastPrizeIndex && attempts < 10);
  lastPrizeIndex = idx;
  lastPool = pool;
  return pool[idx];
}

function showStreak(n) {
  const el = document.createElement("div");
  el.className = "streak-banner";
  el.textContent = n === 3 ? "🔥 ¡TRIPLE RACHA! BONUS x2 🔥" : `🔥 ¡RACHA DE ${n}! +${n*5} BONUS 🔥`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

/* ========== RESPIN ========== */
respinBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (spinning || !canRespin) return;
    const reelIdx = parseInt(btn.dataset.reel);
    if (coins < RESPIN_COST) {
      systemMessage.textContent = `¡Necesitás ${RESPIN_COST} DinoCoins! Seguí girando.`;
      return;
    }

    updateCoins(-RESPIN_COST);
    canRespin = false;
    hideRespinBtns();
    matchInfo.classList.add("hidden");

    const reelEl = document.getElementById(`reel${reelIdx+1}`);
    reelEl.classList.add("spinning");
    systemMessage.textContent = "Re-girando...";

    let spinCount = 0;
    const interval = setInterval(() => {
      reelEl.textContent = randomSymbol();
      spinCount++;
    }, 80);

    setTimeout(() => {
      clearInterval(interval);
      const newSym = randomSymbol();
      currentFinalSymbols[reelIdx] = newSym;
      reelEl.textContent = newSym;
      reelEl.classList.remove("spinning");
      reelEl.classList.add("landed");
      if (navigator.vibrate) navigator.vibrate(30);

      // Evaluate new result
      setTimeout(() => evaluateResult(currentFinalSymbols), 600);
    }, 1000);
  });
});

function showRespinBtns() {
  if (coins < RESPIN_COST) return;
  canRespin = true;
  respinBtns.forEach(btn => {
    btn.classList.remove("hidden");
    btn.querySelector(".respin-cost").textContent = `${RESPIN_COST}🪙`;
    btn.disabled = coins < RESPIN_COST;
  });
}

function hideRespinBtns() {
  canRespin = false;
  respinBtns.forEach(btn => btn.classList.add("hidden"));
}

/* ========== EVALUATE RESULT ========== */
function evaluateResult(syms) {
  const matches = countMatches(syms);
  const reelBoxes = document.querySelectorAll(".reel");

  // Determine coin reward for spin
  let spinCoins;
  if (matches === 3) spinCoins = 15 + Math.floor(Math.random() * 11); // 15-25
  else if (matches === 2) spinCoins = 8 + Math.floor(Math.random() * 8); // 8-15
  else spinCoins = 3 + Math.floor(Math.random() * 5); // 3-7

  // Streak bonus
  streak++;
  let bonusCoins = 0;
  if (streak >= 3) {
    bonusCoins = streak * 5;
    showStreak(streak);
  }

  updateCoins(spinCoins + bonusCoins);

  // Highlight matching reels
  reelBoxes.forEach(r => r.classList.remove("win-glow","match-glow"));
  if (matches === 3) {
    reelBoxes.forEach(r => r.classList.add("win-glow"));
  } else if (matches === 2) {
    if (syms[0]===syms[1]) { reelBoxes[0].classList.add("match-glow"); reelBoxes[1].classList.add("match-glow"); }
    if (syms[1]===syms[2]) { reelBoxes[1].classList.add("match-glow"); reelBoxes[2].classList.add("match-glow"); }
    if (syms[0]===syms[2]) { reelBoxes[0].classList.add("match-glow"); reelBoxes[2].classList.add("match-glow"); }
  }

  // Show match info
  if (matches === 3) {
    matchInfo.textContent = "🎉 ¡¡¡TRIPLE MATCH!!! PREMIO ÉPICO 🎉";
    matchInfo.classList.remove("hidden");
  } else if (matches === 2) {
    matchInfo.textContent = "✨ ¡Doble match! Premio especial ✨";
    matchInfo.classList.remove("hidden");
  } else {
    matchInfo.textContent = "🎰 Premio de consuelo — ¡re-girá un slot por " + RESPIN_COST + "🪙!";
    matchInfo.classList.remove("hidden");
  }

  // Shake + announce
  document.querySelector(".machine").classList.add("shake");
  setTimeout(() => document.querySelector(".machine").classList.remove("shake"), 450);
  systemMessage.textContent = matches >= 2 ? "🎉 ¡¡¡PREMIO!!!" : "🎰 ¡Tenés premio!";
  if (navigator.vibrate) navigator.vibrate(matches === 3 ? [60,40,90,40,120] : [60,40,90]);

  // Choose prize based on matches
  let prize;
  if (Math.random() < 0.03) {
    prize = legendaryPrize;
  } else if (matches === 3) {
    prize = pickFromPool(threeMatchPrizes);
  } else if (matches === 2) {
    prize = pickFromPool(twoMatchPrizes);
  } else {
    prize = pickFromPool(noMatchPrizes);
  }
  prize._coinReward = spinCoins + bonusCoins;

  // Show respin buttons for no-match (before showing prize)
  if (matches === 0) {
    showRespinBtns();
  }

  // Delay then show prize
  const delay = matches === 3 ? 1800 : matches === 2 ? 1400 : 1200;
  setTimeout(() => {
    reelBoxes.forEach(r => r.classList.remove("win-glow","match-glow"));
    hideRespinBtns();
    matchInfo.classList.add("hidden");
    showPrize(prize);
  }, delay);

  if (spins === 5) secretChest.classList.remove("hidden");
  spinning = false;
}

/* ========== SPIN ========== */
function startSpin() {
  if (spinning || modal.classList.contains("show")) return;
  spinning = true;
  spins++;
  canRespin = false;
  hideRespinBtns();
  matchInfo.classList.add("hidden");

  systemMessage.textContent = systemMessages[Math.floor(Math.random() * systemMessages.length)];

  const reelEls = [0,1,2].map(i => document.getElementById(`reel${i+1}`));
  const reelBoxes = document.querySelectorAll(".reel");
  reelEls.forEach(el => { el.classList.remove("landed"); el.classList.add("spinning"); });

  const interval = setInterval(() => {
    setReels(randomSymbol(), randomSymbol(), randomSymbol());
  }, 80);

  // Decide final symbols
  // Small chance of forced triple (5%), decent chance of double (30%)
  let finalSymbols;
  const luck = Math.random();
  if (luck < 0.18) {
    const s = randomSymbol();
    finalSymbols = [s, s, s];
  } else if (luck < 0.50) {
    const s = randomSymbol();
    const pos = Math.floor(Math.random()*3);
    finalSymbols = [randomSymbol(), randomSymbol(), randomSymbol()];
    // Force two to match
    if (pos === 0) { finalSymbols[1] = finalSymbols[0]; }
    else if (pos === 1) { finalSymbols[2] = finalSymbols[1]; }
    else { finalSymbols[2] = finalSymbols[0]; }
    // Make sure third is different
    while(finalSymbols[0]===finalSymbols[1] && finalSymbols[1]===finalSymbols[2]) {
      finalSymbols[pos === 2 ? 1 : 2] = randomSymbol();
    }
  } else {
    // No match — ensure all different
    finalSymbols = [randomSymbol()];
    do { finalSymbols[1] = randomSymbol(); } while(finalSymbols[1]===finalSymbols[0]);
    do { finalSymbols[2] = randomSymbol(); } while(finalSymbols[2]===finalSymbols[0] || finalSymbols[2]===finalSymbols[1]);
  }

  currentFinalSymbols = [...finalSymbols];

  // Stop reels one by one
  const stopDelays = [1200, 1700, 2200];
  stopDelays.forEach((delay, i) => {
    setTimeout(() => {
      reelEls[i].classList.remove("spinning");
      reelEls[i].classList.add("landed");
      reelEls[i].textContent = finalSymbols[i];
      if (navigator.vibrate) navigator.vibrate(30);
    }, delay);
  });

  // After all stopped, evaluate
  setTimeout(() => {
    clearInterval(interval);
    evaluateResult(finalSymbols);
  }, 2400);
}

/* ========== SHOW PRIZE ========== */
function showPrize(prize) {
  prizeTitle.textContent = prize.title;
  prizeIcon.textContent = prize.icon;
  prizeBody.innerHTML = prize.body;

  // Rarity badge
  const rarityLabels = { common:"Común", rare:"Especial", epic:"Épico", legendary:"Legendario" };
  prizeRarity.textContent = rarityLabels[prize.rarity] || "";
  prizeRarity.className = "prize-rarity " + (prize.rarity || "common");

  // Coin reward display
  coinReward.textContent = `+${prize._coinReward || prize.coins} DinoCoins ganadas 🪙`;

  modal.classList.add("show");
  modal.setAttribute("aria-hidden","false");

  if (prize.rarity === "legendary") launchConfetti(80);
  else if (prize.rarity === "epic") launchConfetti(50);
  else if (prize.rarity === "rare") launchConfetti(30);
  else launchConfetti(12);
}

function closePrize() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
  systemMessage.textContent = "Bajá la palanca para recibir otro premio.";
}

closePrizeBtn.addEventListener("click", closePrize);
playAgainBtn.addEventListener("click", closePrize);
modal.addEventListener("click", (e) => { if (e.target === modal) closePrize(); });

/* ========== LEVER ========== */
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
function moveDrag(clientY) { if (!dragging) return; updateLever(clientY - startY); }
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

/* ========== SECRET CHEST ========== */
openChestBtn.addEventListener("click", () => {
  prizeTitle.textContent = "COFRE SECRETO";
  prizeIcon.textContent = "💌🦖";
  prizeRarity.textContent = "Legendario";
  prizeRarity.className = "prize-rarity legendary";
  coinReward.textContent = "+50 DinoCoins 🪙";
  updateCoins(50);
  prizeBody.innerHTML = `
    <p>La máquina encontró un mensaje reservado exclusivamente para Pau.</p>
    <p class="big-love">No puedo hacer que todos los días sean fáciles, pero sí intentar que hoy termine con una sonrisa.</p>
    <p>Gracias por existir.</p>
    <p><strong>— Cami 🦖❤️</strong></p>
  `;
  modal.classList.add("show");
  launchConfetti(60);
});

/* ========== CONFETTI ========== */
function launchConfetti(amount) {
  const pieces = ["❤️","✨","🦖","💛","💖","🦕","⭐","🪙"];
  for (let i = 0; i < amount; i++) {
    const el = document.createElement("span");
    el.className = "confetti";
    el.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    el.style.left = `${Math.random() * 100}vw`;
    el.style.animationDuration = `${2.5 + Math.random() * 2.8}s`;
    el.style.fontSize = `${14 + Math.random() * 22}px`;
    el.style.animationDelay = `${Math.random() * 0.5}s`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 6000);
  }
}

/* ========== AMBIENT ========== */
function spawnSparkle() {
  const el = document.createElement("span");
  el.className = "confetti";
  el.textContent = "✨";
  el.style.left = `${Math.random() * 100}vw`;
  el.style.animationDuration = `${4 + Math.random() * 3}s`;
  el.style.fontSize = "10px";
  el.style.opacity = "0.4";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 7000);
}
setInterval(spawnSparkle, 3000);

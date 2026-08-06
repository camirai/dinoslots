const screens = {
  intro: document.getElementById("introScreen"),
  director: document.getElementById("directorScreen"),
  game: document.getElementById("gameScreen"),
};

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
const noMatchPrizes = [
  { title:"CONSUELO JURÁSICO", icon:"🦕", rarity:"common",
    body:`<p>No hubo match, pero el dino gerente te envía:</p><p class="big-love">Una caricia virtual 💛</p><p>Intentá de nuevo, esta máquina es generosa.</p>` },
  { title:"MENSAJE INTERCEPTADO", icon:"📡", rarity:"common",
    body:`<p>Se interceptó una transmisión del Período Jurásico:</p><p class="big-love">"Decile a la humana que la quiero mucho."</p><p>— Firmado: un velociraptor anónimo 🦖</p>` },
  { title:"CUPÓN DE EMERGENCIA", icon:"🆘", rarity:"common",
    body:`<p>Válido por:</p><p>🫂 Un abrazo de emergencia<br>🛋️ 10 minutos de no hacer nada juntas<br>☕ Un café hecho con amor</p>` },
  { title:"DATO CURIOSO", icon:"🧠", rarity:"common",
    body:`<p><strong>¿Sabías que...</strong></p><p>Los dinosaurios existieron durante 165 millones de años.</p><p>Pero el amor de Cami por vos se siente como si fuera desde antes del Big Bang. 💥❤️</p>` },
  { title:"NOTICIA DE ÚLTIMO MOMENTO", icon:"📰", rarity:"common",
    body:`<p><strong>BREAKING NEWS</strong></p><p>Se confirma que Paula es oficialmente la persona más linda que existe.</p><p class="big-love">Fuente: Cami, 2026.</p>` },
  { title:"DELIVERY PREHISTÓRICO", icon:"📦", rarity:"common",
    body:`<p>Tu pedido ha sido despachado:</p><p>📦 1 cajita de mimos<br>📦 1 paquete de besitos<br>📦 1 dosis de "te amo"</p><p><strong>Estado:</strong> en camino a tus brazos. 💛</p>` },
  { title:"ALERTA METEOROLÓGICA", icon:"🌤️", rarity:"common",
    body:`<p><strong>Pronóstico para hoy:</strong></p><p>☁️ Nublado al principio...<br>🌤️ ...pero con muchas posibilidades de sonrisas por la tarde.<br>💛 100% de probabilidad de amor.</p>` },
  { title:"MEMO INTERNO", icon:"📋", rarity:"common",
    body:`<p><strong>De:</strong> Departamento de Cariño<br><strong>Para:</strong> Paula<br><strong>Asunto:</strong> Recordatorio</p><p class="big-love">Sos increíble incluso en los días difíciles. ❤️</p>` },
  { title:"WIFI JURÁSICO", icon:"📶", rarity:"common",
    body:`<p>Conexión establecida con:</p><p class="big-love">Red: "TeAmoMucho_5G" 📶</p><p>Señal: MÁXIMA<br>Velocidad: infinita<br>Contraseña: no hace falta, es amor libre. 💛</p>` },
];

const twoMatchPrizes = [
  { title:"¡¡JACKPOT!!", icon:"💋", rarity:"rare",
    body:`<p>Ganaste un...</p><p class="big-love">BESO PREMIUM</p><p>Incluye:</p><p>✔ 1 beso largo<br>✔ 3 besitos sorpresa<br>✔ Repeticiones ilimitadas</p>` },
  { title:"FELICIDADES", icon:"🍰", rarity:"rare",
    body:`<p>Ganaste un vale por:</p><p class="big-love">Elegir el próximo postre.</p><p><em>La administración se reserva el derecho a probar un poquito.</em></p>` },
  { title:"NOTIFICACIÓN DEL NIDITO", icon:"❤️🐈🐈‍⬛", rarity:"rare",
    body:`<p>Se detectó movimiento.</p><p><strong>Pispo 🐈 y Chappell 🐈‍⬛ ya ocuparon sus puestos estratégicos.</strong></p><p>Objetivo:</p><p class="big-love">Recibir a mamá con besitos, ronroneos y muchísimo amor. ❤️</p>` },
  { title:"VALE OFICIAL", icon:"🎟️", rarity:"rare",
    body:`<p>Canjeable por:</p><p>🍦 Un helado<br>🎬 Elegir la próxima película<br>🫂 Un abrazo gigante</p><p><strong>Vencimiento:</strong> Nunca.</p>` },
  { title:"DINO TERAPEUTA", icon:"🦕🩺", rarity:"rare",
    body:`<p><strong>Diagnóstico:</strong></p><p>Nivel de cansancio:</p><p class="meter">██████████ 98%</p><p>Tratamiento recomendado:</p><p>✔ Comer algo rico<br>✔ Descansar<br>✔ Hablar con Cami</p><p><strong>Pronóstico:</strong> Excelente ❤️</p>` },
  { title:"NOCHE DE PELIS", icon:"🎬🍿", rarity:"rare",
    body:`<p>El Casino Jurásico te otorga:</p><p class="big-love">NOCHE DE PELIS OBLIGATORIA</p><p>✔ Vos elegís la peli<br>✔ Pochoclo incluido<br>✔ Manta y acurrucarse: OBLIGATORIO</p>` },
  { title:"PASEO MISTERIOSO", icon:"🗺️", rarity:"rare",
    body:`<p>Desbloqueaste:</p><p class="big-love">Un paseo sorpresa juntas</p><p>El destino lo elige Cami.<br>Dresscode: cómoda y linda (como siempre). 🦖💛</p>` },
];

const threeMatchPrizes = [
  { title:"🏆 TRIPLE MATCH 🏆", icon:"🦖👑", rarity:"epic",
    body:`<p>¡¡¡TRES IGUALES!!!</p><p class="big-love">CENA SORPRESA</p><p>Cami se encarga de TODO:<br>✔ Elegir el lugar<br>✔ Reservar<br>✔ Hacerte sentir la persona más especial del mundo</p>` },
  { title:"🏆 MEGA JACKPOT 🏆", icon:"💎", rarity:"epic",
    body:`<p>¡¡¡TRIPLE!!!</p><p class="big-love">DÍA COMPLETO DE MIMOS</p><p>Un día entero donde Cami hace todo lo que vos quieras.<br>Sin excusas. Sin límites.<br>Solo amor. 💛🦖</p>` },
  { title:"🏆 SUPREMO 🏆", icon:"🌟", rarity:"epic",
    body:`<p>El premio más raro de la máquina:</p><p class="big-love">CARTA DE AMOR ESCRITA A MANO</p><p>Cami va a sentarse y escribirte una carta de verdad, en papel, con toda la cursilería del mundo. 💌</p>` },
];


/* ========== ECONOMÍA DEL JUEGO ========== */
const STARTING_COINS = 20;
const COINS_NO_MATCH = 1;
const COINS_TWO_MATCH = 15;
const COINS_THREE_MATCH = 40;
const RESPIN_COST = 8;
const RESULT_REVEAL_DELAY = 2600;

let spinning = false;
let coins = STARTING_COINS;
let spins = 0;
let dragging = false;
let startY = 0;
let leverY = 16;
let lastPrizeIndex = -1;
let lastPool = null;
let currentFinalSymbols = [];
let pendingPrize = null;
let pendingReward = 0;
let pendingMatches = 0;
let respinUsedThisRound = false;
let resultControlsTimer = null;

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
const claimBtn = document.getElementById("claimBtn");
const secretChest = document.getElementById("secretChest");
const openChestBtn = document.getElementById("openChestBtn");
const respinBtns = [...document.querySelectorAll(".respin-btn")];

coinCount.textContent = coins;

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
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
function randomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function setReel(index, symbol) {
  document.getElementById(`reel${index + 1}`).textContent = symbol;
}

function setReels(symbolsToShow) {
  symbolsToShow.forEach((symbol, index) => setReel(index, symbol));
}

function getVisibleSymbols() {
  return [1, 2, 3].map(index => document.getElementById(`reel${index}`).textContent);
}

function updateCoins(amount) {
  coins = Math.max(0, coins + amount);
  coinCount.textContent = coins;
  coinsEl.classList.remove("pop", "spend");
  void coinsEl.offsetWidth;
  coinsEl.classList.add(amount >= 0 ? "pop" : "spend");
}

function countMatches(symbolsToCheck) {
  if (symbolsToCheck[0] === symbolsToCheck[1] && symbolsToCheck[1] === symbolsToCheck[2]) return 3;
  if (
    symbolsToCheck[0] === symbolsToCheck[1] ||
    symbolsToCheck[1] === symbolsToCheck[2] ||
    symbolsToCheck[0] === symbolsToCheck[2]
  ) return 2;
  return 0;
}

function rewardForMatches(matches) {
  if (matches === 3) return COINS_THREE_MATCH;
  if (matches === 2) return COINS_TWO_MATCH;
  return COINS_NO_MATCH;
}

function poolForMatches(matches) {
  if (matches === 3) return threeMatchPrizes;
  if (matches === 2) return twoMatchPrizes;
  return noMatchPrizes;
}

function pickFromPool(pool) {
  if (pool.length === 1) return pool[0];
  let index;
  let attempts = 0;
  do {
    index = Math.floor(Math.random() * pool.length);
    attempts += 1;
  } while (pool === lastPool && index === lastPrizeIndex && attempts < 10);
  lastPrizeIndex = index;
  lastPool = pool;
  return pool[index];
}

function clearResultUI() {
  if (resultControlsTimer) {
    clearTimeout(resultControlsTimer);
    resultControlsTimer = null;
  }
  matchInfo.classList.add("hidden");
  claimBtn.classList.add("hidden");
  hideRespinButtons();
  document.querySelectorAll(".reel").forEach(reel => {
    reel.classList.remove("win-glow", "match-glow");
  });
}

function highlightMatches(symbolsToCheck, matches) {
  const reelBoxes = [...document.querySelectorAll(".reel")];
  reelBoxes.forEach(reel => reel.classList.remove("win-glow", "match-glow"));

  if (matches === 3) {
    reelBoxes.forEach(reel => reel.classList.add("win-glow"));
    return;
  }

  if (matches === 2) {
    if (symbolsToCheck[0] === symbolsToCheck[1]) {
      reelBoxes[0].classList.add("match-glow");
      reelBoxes[1].classList.add("match-glow");
    } else if (symbolsToCheck[1] === symbolsToCheck[2]) {
      reelBoxes[1].classList.add("match-glow");
      reelBoxes[2].classList.add("match-glow");
    } else {
      reelBoxes[0].classList.add("match-glow");
      reelBoxes[2].classList.add("match-glow");
    }
  }
}

function oddReelIndex(symbolsToCheck) {
  if (symbolsToCheck[0] === symbolsToCheck[1]) return 2;
  if (symbolsToCheck[1] === symbolsToCheck[2]) return 0;
  if (symbolsToCheck[0] === symbolsToCheck[2]) return 1;
  return null;
}

function hideRespinButtons() {
  respinBtns.forEach(button => button.classList.add("hidden"));
}

function showAllowedRespinButtons(matches) {
  hideRespinButtons();
  if (respinUsedThisRound || matches === 3) return;

  const allowedIndexes = matches === 2
    ? [oddReelIndex(currentFinalSymbols)]
    : [0, 1, 2];

  allowedIndexes.forEach(index => {
    if (index === null) return;
    const button = respinBtns[index];
    button.querySelector(".respin-cost").textContent = `${RESPIN_COST}🪙`;
    button.disabled = coins < RESPIN_COST;
    button.classList.remove("hidden");
  });
}

function describeResult(matches) {
  if (matches === 3) return `🎉 ¡TRIPLE MATCH! Premio épico · +${COINS_THREE_MATCH} DinoCoins`;
  if (matches === 2) return `✨ ¡Doble match! Premio especial · +${COINS_TWO_MATCH} DinoCoins`;
  return `🎰 Sin match · Premio jurásico · +${COINS_NO_MATCH} DinoCoin`;
}

function setClaimButtonText(matches) {
  claimBtn.textContent = matches === 3
    ? "DESCUBRIR PREMIO ÉPICO 🏆"
    : "VER MI PREMIO 🎁";
}

/* ========== EVALUACIÓN ========== */
function prepareFinalResult(symbolsToCheck) {
  // La fuente de verdad es exactamente lo que quedó visible en pantalla.
  currentFinalSymbols = [...symbolsToCheck];
  const matches = countMatches(currentFinalSymbols);
  pendingMatches = matches;
  pendingReward = rewardForMatches(matches);
  pendingPrize = pickFromPool(poolForMatches(matches));

  highlightMatches(currentFinalSymbols, matches);
  systemMessage.textContent = matches === 3
    ? "🏆 ¡¡¡TRIPLE MATCH ÉPICO!!!"
    : matches === 2
      ? "✨ ¡DOBLE MATCH!"
      : "🎰 Resultado listo";

  matchInfo.textContent = describeResult(matches);
  matchInfo.classList.remove("hidden");

  document.querySelector(".machine").classList.add("shake");
  setTimeout(() => document.querySelector(".machine").classList.remove("shake"), 450);

  if (navigator.vibrate) {
    navigator.vibrate(matches === 3 ? [60, 40, 90, 40, 120] : [45, 35, 65]);
  }

  // Primero se deja ver la combinación. Recién después aparecen las decisiones.
  resultControlsTimer = setTimeout(() => {
    setClaimButtonText(matches);
    claimBtn.classList.remove("hidden");
    showAllowedRespinButtons(matches);

    if (!respinUsedThisRound && matches < 3) {
      systemMessage.textContent = coins >= RESPIN_COST
        ? "Podés ver tu premio o pagar 8 DinoCoins para re-girar un slot."
        : "Podés ver tu premio. Te faltan DinoCoins para un re-giro.";
    } else {
      systemMessage.textContent = "Este es tu resultado definitivo. Podés ver tu premio.";
    }
  }, RESULT_REVEAL_DELAY);

  spinning = false;
  if (spins === 5) secretChest.classList.remove("hidden");
}

/* ========== TIRADA PRINCIPAL ========== */
function generateFinalSymbols() {
  const chance = Math.random();

  // 10% triple, 30% doble, 60% sin match.
  if (chance < 0.10) {
    const symbol = randomSymbol();
    return [symbol, symbol, symbol];
  }

  if (chance < 0.40) {
    const matchSymbol = randomSymbol();
    let differentSymbol;
    do { differentSymbol = randomSymbol(); } while (differentSymbol === matchSymbol);
    const differentPosition = Math.floor(Math.random() * 3);
    const result = [matchSymbol, matchSymbol, matchSymbol];
    result[differentPosition] = differentSymbol;
    return result;
  }

  const result = [randomSymbol()];
  do { result[1] = randomSymbol(); } while (result[1] === result[0]);
  do {
    result[2] = randomSymbol();
  } while (result[2] === result[0] || result[2] === result[1]);
  return result;
}

function startSpin() {
  if (spinning || modal.classList.contains("show") || pendingPrize) return;

  spinning = true;
  spins += 1;
  respinUsedThisRound = false;
  clearResultUI();
  systemMessage.textContent = systemMessages[Math.floor(Math.random() * systemMessages.length)];

  const reelElements = [1, 2, 3].map(index => document.getElementById(`reel${index}`));
  const finalSymbols = generateFinalSymbols();
  const intervals = [];

  reelElements.forEach((element, index) => {
    element.classList.remove("landed");
    element.classList.add("spinning");
    intervals[index] = setInterval(() => {
      element.textContent = randomSymbol();
    }, 80);
  });

  const stopDelays = [1200, 1700, 2200];
  stopDelays.forEach((delay, index) => {
    setTimeout(() => {
      clearInterval(intervals[index]);
      reelElements[index].classList.remove("spinning");
      reelElements[index].classList.add("landed");
      reelElements[index].textContent = finalSymbols[index];
      if (navigator.vibrate) navigator.vibrate(25);

      if (index === 2) {
        // Se lee la pantalla después de que los tres rodillos frenaron.
        setTimeout(() => prepareFinalResult(getVisibleSymbols()), 350);
      }
    }, delay);
  });
}

/* ========== RE-GIRO INDIVIDUAL ========== */
respinBtns.forEach(button => {
  button.addEventListener("click", () => {
    if (spinning || respinUsedThisRound || !pendingPrize) return;
    if (coins < RESPIN_COST) {
      systemMessage.textContent = `Necesitás ${RESPIN_COST} DinoCoins para re-girar.`;
      return;
    }

    const reelIndex = Number(button.dataset.reel);
    updateCoins(-RESPIN_COST);
    respinUsedThisRound = true;
    pendingPrize = null;
    pendingReward = 0;
    pendingMatches = 0;
    spinning = true;
    clearResultUI();
    systemMessage.textContent = `Re-girando el slot ${reelIndex + 1}...`;

    const reelElement = document.getElementById(`reel${reelIndex + 1}`);
    reelElement.classList.remove("landed");
    reelElement.classList.add("spinning");

    const interval = setInterval(() => {
      reelElement.textContent = randomSymbol();
    }, 80);

    setTimeout(() => {
      clearInterval(interval);
      const newSymbol = randomSymbol();
      reelElement.textContent = newSymbol;
      reelElement.classList.remove("spinning");
      reelElement.classList.add("landed");
      if (navigator.vibrate) navigator.vibrate(30);

      setTimeout(() => prepareFinalResult(getVisibleSymbols()), 500);
    }, 1200);
  });
});

/* ========== COBRAR PREMIO ========== */
claimBtn.addEventListener("click", () => {
  if (!pendingPrize || spinning) return;

  const prizeToShow = pendingPrize;
  const rewardToCredit = pendingReward;
  pendingPrize = null;
  pendingReward = 0;
  hideRespinButtons();
  claimBtn.classList.add("hidden");
  matchInfo.classList.add("hidden");

  // Las monedas se acreditan una sola vez y según el resultado definitivo.
  updateCoins(rewardToCredit);
  showPrize(prizeToShow, rewardToCredit);
});

function showPrize(prize, coinAmount) {
  prizeTitle.textContent = prize.title;
  prizeIcon.textContent = prize.icon;
  prizeBody.innerHTML = prize.body;

  const rarityLabels = {
    common: "Jurásico",
    rare: "Especial",
    epic: "Épico",
  };
  prizeRarity.textContent = rarityLabels[prize.rarity] || "";
  prizeRarity.className = `prize-rarity ${prize.rarity || "common"}`;
  coinReward.textContent = `+${coinAmount} ${coinAmount === 1 ? "DinoCoin ganada" : "DinoCoins ganadas"} 🪙`;

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");

  if (prize.rarity === "epic") launchConfetti(60);
  else if (prize.rarity === "rare") launchConfetti(30);
  else launchConfetti(12);
}

function closePrize() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.querySelectorAll(".reel").forEach(reel => {
    reel.classList.remove("win-glow", "match-glow");
  });
  systemMessage.textContent = "Bajá la palanca para recibir otro premio.";
}

closePrizeBtn.addEventListener("click", closePrize);
playAgainBtn.addEventListener("click", closePrize);
modal.addEventListener("click", event => {
  if (event.target === modal) closePrize();
});

/* ========== PALANCA ========== */
function updateLever(y) {
  const min = 16;
  const max = leverTrack.clientHeight - leverKnob.offsetHeight - 16;
  leverY = Math.max(min, Math.min(max, y));
  leverKnob.style.top = `${leverY}px`;
}

function beginDrag(clientY) {
  if (spinning || pendingPrize) return;
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
  setTimeout(() => { leverKnob.style.transition = ""; }, 300);
  if (triggered) startSpin();
}

leverKnob.addEventListener("pointerdown", event => {
  leverKnob.setPointerCapture(event.pointerId);
  beginDrag(event.clientY);
});
leverKnob.addEventListener("pointermove", event => moveDrag(event.clientY));
leverKnob.addEventListener("pointerup", endDrag);
leverKnob.addEventListener("pointercancel", endDrag);

leverTrack.addEventListener("click", event => {
  if (event.target === leverKnob || spinning || pendingPrize) return;
  leverKnob.style.transition = "top .24s ease";
  updateLever(leverTrack.clientHeight - leverKnob.offsetHeight - 16);
  setTimeout(() => {
    updateLever(16);
    startSpin();
    setTimeout(() => { leverKnob.style.transition = ""; }, 300);
  }, 250);
});

/* ========== COFRE SECRETO ========== */
openChestBtn.addEventListener("click", () => {
  prizeTitle.textContent = "COFRE SECRETO";
  prizeIcon.textContent = "💌🦖";
  prizeRarity.textContent = "Secreto";
  prizeRarity.className = "prize-rarity epic";
  coinReward.textContent = "Un mensaje reservado para Pau ❤️";
  prizeBody.innerHTML = `
    <p>La máquina encontró un mensaje reservado exclusivamente para Pau.</p>
    <p class="big-love">No puedo hacer que todos los días sean fáciles, pero sí intentar que hoy termine con una sonrisa.</p>
    <p>Gracias por existir.</p>
    <p><strong>— Cami 🦖❤️</strong></p>
  `;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  launchConfetti(60);
});

/* ========== CONFETTI ========== */
function launchConfetti(amount) {
  const pieces = ["❤️", "✨", "🦖", "💛", "💖", "🦕", "⭐", "🪙"];
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement("span");
    element.className = "confetti";
    element.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    element.style.left = `${Math.random() * 100}vw`;
    element.style.animationDuration = `${2.5 + Math.random() * 2.8}s`;
    element.style.fontSize = `${14 + Math.random() * 22}px`;
    element.style.animationDelay = `${Math.random() * 0.5}s`;
    document.body.appendChild(element);
    setTimeout(() => element.remove(), 6000);
  }
}

/* ========== BRILLOS AMBIENTALES ========== */
function spawnSparkle() {
  const element = document.createElement("span");
  element.className = "confetti";
  element.textContent = "✨";
  element.style.left = `${Math.random() * 100}vw`;
  element.style.animationDuration = `${4 + Math.random() * 3}s`;
  element.style.fontSize = "10px";
  element.style.opacity = "0.4";
  document.body.appendChild(element);
  setTimeout(() => element.remove(), 7000);
}
setInterval(spawnSparkle, 3000);

import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="page-content fade-in">
   
    <h1 class="fade-in fade-1">Bienvenido a mi proyecto</h1>
    <h2 class="fade-in fade-2">Att: Sebastian Soto</h2>

    <div class="social-links fade-in fade-3">
      <a href="https://www.facebook.com/sebastiansotobrow" target="_blank">
      <button class="info-sebas">FB Sebas</button></a>

      <a href="https://github.com/sebastiansotos" target="_blank">
      <button class="info-sebas">GitHub Sebas</button></a>

      <a href="https://www.instagram.com/its_s3baxx_/" target="_blank">
      <button class="info-sebas">IG Sebas</button></a>


    <a href="https://www.linkedin.com/in/sebastian-a880293b7/" target="_blank">
      <button class="info-sebas">LinkedinSebas</button></a>
    
  </div>


    <section class="projects fade-in fade-4">
      <h3>Proyectos destacados</h3>
      <ul class="project-list">
        <li class="project-item">
          <strong>Portafolio Personal</strong>
          <p>Sitio para mostrar mis redes, ideas y experimentos web.</p>
        </li>
        <li class="project-item">
          <strong>Contador Interactivo</strong>
          <p>Botón dinámico que responde al clic y modifica el fondo.</p>
        </li>
        <li class="project-item">
          <strong>Landing Responsive</strong>
          <p>Diseño adaptable para desktop y celular con animaciones suaves.</p>
        </li>
      </ul>
    </section>


    <div class="card">
      <button id="counter" type="button"></button>
    </div>

    <section class="mini-game fade-in fade-4">
      <button id="toggle-game" type="button">🎮 Jugar mini juego</button>
      <div id="game-panel" class="game-panel hidden">
        <h3>Adivina el número (1 a 5)</h3>
        <div class="game-controls">
          <input id="game-input" type="number" min="1" max="5" placeholder="Tu número" />
          <button id="guess-button" type="button">Probar</button>
          <button id="reset-game" type="button">Nuevo número</button>
        </div>
        <p id="game-result" class="game-result">Tienes intentos ilimitados. ¡Suerte!</p>
      </div>
    </section>

    <p class="read-the-docs fade-in fade-3">
      Inventando algo para escribir aquí, no se me ocurre nada, así que lo dejo así, espero que no se note mucho.
    </p>

  </div>
`

setupCounter(document.querySelector('#counter'))


const FBSebasButtons = document.querySelectorAll('.info-sebas');

const buttonLogos = {
  'FB Sebas': 'https://cdn.simpleicons.org/facebook/1877F2',
  'GitHub Sebas': 'https://cdn.simpleicons.org/github/FFFFFF',
  'IG Sebas': 'https://cdn.simpleicons.org/instagram/E4405F',
  'Linkedin Sebas': 'https://cdn.simpleicons.org/linkedin/0A66C2'
};

FBSebasButtons.forEach(button => {
  const text = button.textContent.trim();
  const logoUrl = buttonLogos[text];
  if (logoUrl) {
    const img = document.createElement('img');
    img.src = logoUrl;
    img.alt = text + ' logo';
    img.classList.add('social-icon');
    button.prepend(img);
  }
});

const boredButton = document.querySelector('#counter');

const randomHue = () => Math.floor(Math.random() * 360);

boredButton.addEventListener('click', () => {
  const hue1 = randomHue();
  const hue2 = (hue1 + 45) % 360;
  const hue3 = (hue1 + 90) % 360;

  document.body.style.background = `linear-gradient(160deg, hsl(${hue1}, 65%, 14%) 0%, hsl(${hue2}, 55%, 22%) 55%, hsl(${hue3}, 60%, 16%) 100%)`;
});

const toggleGameButton = document.querySelector('#toggle-game');
const gamePanel = document.querySelector('#game-panel');
const gameInput = document.querySelector('#game-input');
const guessButton = document.querySelector('#guess-button');
const resetGameButton = document.querySelector('#reset-game');
const gameResult = document.querySelector('#game-result');

let targetNumber = Math.floor(Math.random() * 5) + 1;
let attempts = 0;

toggleGameButton.addEventListener('click', () => {
  gamePanel.classList.toggle('hidden');
  toggleGameButton.textContent = gamePanel.classList.contains('hidden')
    ? '🎮 Jugar mini juego'
    : '🎮 Ocultar mini juego';
});

guessButton.addEventListener('click', () => {
  const guess = Number(gameInput.value);

  if (!Number.isInteger(guess) || guess < 1 || guess > 5) {
    gameResult.textContent = 'Escribe un número válido entre 1 y 5.';
    return;
  }

  attempts += 1;

  if (guess === targetNumber) {
    gameResult.textContent = `¡Ganaste! Era el ${targetNumber}. Intentos: ${attempts}.`;
    targetNumber = Math.floor(Math.random() * 5) + 1;
    attempts = 0;
    gameInput.value = '';
    return;
  }

  gameResult.textContent = guess < targetNumber
    ? 'Casi... prueba un número más alto.'
    : 'Casi... prueba un número más bajo.';
});

resetGameButton.addEventListener('click', () => {
  targetNumber = Math.floor(Math.random() * 5) + 1;
  attempts = 0;
  gameInput.value = '';
  gameResult.textContent = 'Listo, ya pensé otro número. ¡Intenta adivinar!';
});


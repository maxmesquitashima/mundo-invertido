const switchThemeButton = document.getElementById('switch-theme-button');
const audio = document.getElementById('music');
const muteButton = document.getElementById('mute-button');

let isPlaying = false;

function switchTheme() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');

  const theme = document.body.classList[0];
  const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg';

  audio.src = `assets/musics/${music}`;

  if (isPlaying) {
    audio.play();
  }

  document.body.setAttribute('aria-label', `O site está utilizando o tema ${theme === 'light-theme' ? 'claro' : 'escuro'}`);
}

switchThemeButton.addEventListener('click', () => {
  switchTheme();
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
  }
});

function validateForm() {
  const name = document.getElementById('txtName').value;
  const email = document.getElementById('txtEmail').value;
  const level = document.getElementById('txtLevel').value;
  const character = document.getElementById('txtCharacter').value;

  if (name === '' || email === '' || level === '' || character === '') {
    alert('Por favor, preencha todos os campos para se inscrever.');
    return false;
  }

  return true;
}

const subscribeButton = document.getElementById('btnSubscribe');

subscribeButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateForm()) {
    // Add your subscription logic here
    alert('Inscrito com sucesso!');
  }
});

muteButton.addEventListener('click', () => {
  if (audio.muted) {
    audio.muted = false;
    muteButton.innerHTML = '<img src="assets/images/icons/mute.svg" alt="Ícone de mudo">';
  } else {
    audio.muted = true;
    muteButton.innerHTML = '<img src="assets/images/icons/unmute.svg" alt="Ícone de desmutar">';
  }
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const elements = {
  spanEl: document.querySelector('.color'),
  buttonEl: document.querySelector('.change-color'),
};

elements.buttonEl.addEventListener('click', handleButtonClick);

function handleButtonClick(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  elements.spanEl.textContent = color;
}

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике
// на button.change - color и выводит значение цвета в span.color.

//  <div class="widget">
//   <p>
//     Background color: <span class="color">-</span>
//   </p>
//   <button type="button" class="change-color">
//     Change color
//   </button>
// </div>;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
buttonEl.addEventListener('click', handleButtonClick);

function handleButtonClick(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  document.querySelector('.color').textContent = color;
}

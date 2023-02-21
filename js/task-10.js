// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов
// в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

//   <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let counter = 0;
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', getAmount);
buttonDestroy.addEventListener('click', destroyBoxes);

function getAmount() {
  let amount = document.querySelector('input').value;
  counter += 1;
  createBoxes(amount);
}

function createDiv(size) {
  const divEl = document.createElement('div');
  divEl.style.width = `${size}px`;
  divEl.style.height = `${size}px`;
  divEl.style.backgroundColor = getRandomHexColor();
  divEl.style.margin = '10px';
  return divEl;
}

let i = 0;

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();

  for (; i < amount * counter; i++) {
    const size = basicSize + i * 10;

    const divEl = createDiv(size);

    fragment.appendChild(divEl);
  }
  divBoxes.appendChild(fragment);
}

function destroyBoxes() {
  divBoxes.innerHTML = '';
  counter = 0;
  i = 0;
}

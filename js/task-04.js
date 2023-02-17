// // // Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// // // Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// // // Обновляй интерфейс новым значением переменной counterValue.

// // let counterValue = 5;

// // const counterElement = document.querySelector('#value');

// // function renderCounterValue() {
// //   counterElement.textContent = counterValue;
// // }
// // renderCounterValue();

// // const buttonDecrement = document.querySelector('[data-action="decrement"]');
// // buttonDecrement.addEventListener('click', () => {
// //   counterValue -= 1;
// //   renderCounterValue();
// // });

// // const buttonIncrement = document.querySelector('[data-action="increment"]');
// // buttonIncrement.addEventListener('click', () => {
// //   counterValue += 1;
// //   renderCounterValue();
// // });

// let counterValue = 5;

// const elements = {
//   counter: document.querySelector('#value'),
//   buttonDecrement: document.querySelector('[data-action="decrement"]'),
//   buttonIncrement: document.querySelector('[data-action="increment"]'),
// };

// function renderCounterValue() {
//   elements.counter.textContent = counterValue;
// }

// function decrement() {
//   counterValue -= 1;
//   renderCounterValue();
// }

// function increment() {
//   counterValue += 1;
//   renderCounterValue();
// }

// function bindEvents() {
//   elements.buttonDecrement.addEventListener('click', decrement);
//   elements.buttonIncrement.addEventListener('click', increment);
// }

// renderCounterValue();
// bindEvents();

class Counter {
  #counterValue = 5;

  #elements = {
    counter: document.querySelector('#value'),
    buttonDecrement: document.querySelector('[data-action="decrement"]'),
    buttonIncrement: document.querySelector('[data-action="increment"]'),
  };

  constructor() {
    this.#renderCounterValue();
    this.#bindEvents();
  }

  #renderCounterValue() {
    this.#elements.counter.textContent = this.#counterValue;
  }

  #decrement() {
    this.#counterValue -= 1;
    this.#renderCounterValue();
  }

  #increment() {
    this.#counterValue += 1;
    this.#renderCounterValue();
  }

  #bindEvents() {
    this.#elements.buttonDecrement.addEventListener(
      'click',
      this.#decrement.bind(this),
    );
    this.#elements.buttonIncrement.addEventListener(
      'click',
      this.#increment.bind(this),
    );
  }
}

new Counter();

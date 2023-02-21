let counterValue = 0;

const counterElement = document.querySelector('#value');

function renderCounterValue() {
  counterElement.textContent = counterValue;
}
renderCounterValue();

const buttonDecrement = document.querySelector('[data-action="decrement"]');
buttonDecrement.addEventListener('click', () => {
  counterValue -= 1;
  renderCounterValue();
});

const buttonIncrement = document.querySelector('[data-action="increment"]');
buttonIncrement.addEventListener('click', () => {
  counterValue += 1;
  renderCounterValue();
});

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане
// должна отображаться строка "Anonymous"

const elements = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

elements.input.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  elements.output.textContent = event.currentTarget.value;
}

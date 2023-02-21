const elements = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

elements.input.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  elements.output.textContent = event.currentTarget.value;
  if (elements.input.value.trim() === '') {
    elements.output.textContent = 'Anonymous';
  }
}

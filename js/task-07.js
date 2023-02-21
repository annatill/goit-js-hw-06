const elements = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

elements.input.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  elements.span.style.fontSize = event.currentTarget.value + 'px';
}

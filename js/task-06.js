const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', handleInputBlur);

function handleInputBlur() {
  if (
    inputEl.value.trim().length ===
    parseInt(inputEl.getAttribute('data-length'))
  ) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}

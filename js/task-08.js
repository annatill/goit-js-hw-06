const form = document.querySelector('.login-form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll('input');

  const isInvalid = [...inputs].some(input => input.value.trim() === '');

  if (isInvalid) {
    alert('Error! All fields must be filled');
    return;
  }

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  console.log(formData);
  form.reset();
}

const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetBtn');
const message = document.getElementById('message');

function showGreeting() {
  const name = nameInput.value.trim();

  if (!name) {
    message.textContent = 'Please enter your name first.';
    return;
  }

  message.textContent = `Hello, ${name}! Your first web app is working beautifully.`;
  nameInput.value = '';
}

greetButton.addEventListener('click', showGreeting);
nameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    showGreeting();
  }
});

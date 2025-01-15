let count = 0;

const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// Função para atualizar o contador na tela
function updateCounter() {
  counterDisplay.textContent = count;
}

// Incrementar o contador
incrementButton.addEventListener('click', () => {
  count++;
  updateCounter();
});

// Decrementar o contador
decrementButton.addEventListener('click', () => {
  count--;
  updateCounter();
});

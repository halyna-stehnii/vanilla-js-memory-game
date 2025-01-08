const animals = ['🐶', '🐱', '🐭', '🐳', '🐰', '🐌', '🐻', '🐝', '🐞', '🐯'];
const cardBack = '🐾';

// Duplicate animals to create pairs and shuffle the array
const shuffledAnimals = [...animals, ...animals].sort(
  () => Math.random() - 0.5
);

const bodyElement = document.body;

function createCards() {
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('game-container');

  shuffledAnimals.forEach((animal) => {
    const card = document.createElement('div');
    card.classList.add('card');

    // Create the animal emoji (front)
    const emoji = document.createElement('div');
    emoji.textContent = animal;
    emoji.style.fontSize = '3rem';
    emoji.style.display = 'none';

    // Create the card back
    const back = document.createElement('div');
    back.textContent = cardBack;
    back.style.fontSize = '3rem';

    card.appendChild(emoji);
    card.appendChild(back); // Add the card back
    gameContainer.appendChild(card);
  });
  return gameContainer;
}

bodyElement.appendChild(createCards());

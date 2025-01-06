const animals = ['🐶', '🐱', '🐭', '🐳', '🐰', '🐌', '🐻', '🐝', '🐞', '🐯'];
const cardBack = '🐾';

// Duplicate animals to create pairs and shuffle the array
const shuffledAnimals = [...animals, ...animals].sort(
  () => Math.random() - 0.5
);

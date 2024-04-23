// Array of names to cycle through
const names = ['Mero', 'mstrv', '4D 65 72 6F'];
let currentIndex = 0;

// Function to animate text
function animateText() {
  const textElement = document.getElementById('name-placeholder');
  const currentName = names[currentIndex % names.length];
  let text = '';

  // Delete previous name letter by letter
  for (let i = 0; i < textElement.textContent.length; i++) {
    setTimeout(() => {
      text = textElement.textContent.slice(0, -1); // Remove the last character
      textElement.textContent = text;
    }, i * 150); // Delete one letter every 50 milliseconds
  }

  // Add new name letter by letter
  for (let i = 0; i < currentName.length; i++) {
    setTimeout(() => {
      text += currentName[i];
      textElement.textContent = text;
    }, (textElement.textContent.length + i) * 150); // Add one letter every 50 milliseconds after deleting previous name
  }

  currentIndex++; // Move to the next name
}

// Start the animation
setInterval(animateText, 2500); // Change text every 1.3 seconds
const container = document.getElementById('grid-container');
const button = document.getElementById('resizeBtn');

function createGrid(size) {
  container.innerHTML = ''; // limpia cuadricula
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // efecto lapiz
    square.addEventListener('click', () => {  // cambiar click a mouseover para que sea al pasar el cursor
      square.style.backgroundColor = 'black';
    });

    container.appendChild(square);
  }
}

function promptGridSize() {
  let newSize = prompt("¿Cuántos cuadrados por lado quieres? (máximo 100)");
  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Por favor, introduce un número válido entre 1 y 100.");
  } else {
    createGrid(newSize);
  }
}

button.addEventListener('click', promptGridSize);

createGrid(16);

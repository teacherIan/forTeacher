const text = document.querySelector('.container-text');

function mouseMoveFunction(event) {
  let currentX = event.clientX;
  let currentY = event.clientY;

  let height = window.innerHeight;
  let width = window.innerWidth;

  let percentageX = -(currentX / width) * 100 + 100;
  let percentageY = -(currentY / height) * 100 + 100;

  if (percentageX < 15) {
    percentageX = 15;
  }

  if (percentageX > 80) {
    percentageX = 80;
  }

  if (percentageY < 10) {
    percentageY = 15;
  }

  if (percentageY > 85) {
    percentageY = 85;
  }

  text.style.top = percentageY + '%';
  text.style.left = percentageX + '%';

  text.style.fontSize = percentageY + percentageX + 'px';
}

window.addEventListener('mousemove', mouseMoveFunction);

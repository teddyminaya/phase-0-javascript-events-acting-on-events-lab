const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  let left = parseInt(dodger.style.left);
  dodger.style.left = `${left - 10}px`;
}

function moveDodgerRight() {
  let right = parseInt(dodger.style.right);
  dodger.style.right = `${right + 10}px`;
}
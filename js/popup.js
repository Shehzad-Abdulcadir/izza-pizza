const modal = document.getElementById('js-map-modal');
const button = document.getElementById('js-map-modal-trigger');
const close = document.getElementsByClassName('c-popup__close')[0];

// Open the modal
button.onclick = function() {
  modal.style.display = 'block';
};

// Close the modal
close.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

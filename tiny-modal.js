// https://clubmate.fi/jquerys-closest-function-and-pure-javascript-alternatives/
const closest = function(el, fn) {
  return el && (fn(el) ? el : closest(el.parentNode, fn));
};

const Modal = (function() {
  const modalOpen = document.querySelector('[data-modal="open"]'),
    modalClose = document.querySelector('[data-modal="close"]'),
    modalWrapper = document.querySelector('[data-modal="wrapper"]');

  return {
    init: function() {
      modalOpen.onclick = function(e) {
        e.preventDefault();
        modalWrapper.classList.add('modal-opened');
      };
      modalClose.onclick = function(e) {
        e.preventDefault();
        modalWrapper.classList.remove('modal-opened');
      };
      document.onclick = function(e) {
        if (e.target === modalWrapper) {
          e.preventDefault();
          modalWrapper.classList.remove('modal-opened');
        }
      };
    },
  };
})();

Modal.init();

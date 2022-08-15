(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-mobile-buy-open]'),
    closeModalBtn: document.querySelector('[data-modal-mobile-buy-close]'),
    modal: document.querySelector('[data-modal-mobile-buy]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
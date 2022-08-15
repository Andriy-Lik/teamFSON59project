(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-primary]'),
    closeModalBtn: document.querySelector('[data-modal-close-primary]'),
    modal: document.querySelector('[data-modal-primary]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-primary');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-secondary]'),
    closeModalBtn: document.querySelector('[data-modal-close-secondary]'),
    modal: document.querySelector('[data-modal-secondary]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-secondary');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-third]'),
    closeModalBtn: document.querySelector('[data-modal-close-third]'),
    modal: document.querySelector('[data-modal-third]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-third');
  }
})();

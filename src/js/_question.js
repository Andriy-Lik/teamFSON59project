(() => {
  const refs = {
    openModalBtn: document.querySelector("[modal-question-open]"),
    closeModalBtn: document.querySelector("[modal-question-close]"),
    modal: document.querySelector("[modal-question]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
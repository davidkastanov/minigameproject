(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-footer-modal-open]"),
    closeModalBtn: document.querySelector(".footer__modal__close__btn"), // ← было __bt
    modal: document.querySelector(".footer__backdrop"),                  // ← добавили точку
  };

  function toggleModal(e) {
    // если вдруг забудешь поменять type, это спасет от сабмита
    if (e) e.preventDefault();
    refs.modal.classList.toggle("footer__is-hidden");
    document.body.classList.toggle("no-scroll");
  }

  function onBackdropClick(event) {
    if (event.target === event.currentTarget) toggleModal();
  }

  function onEscModalClose(event) {
    if (event.code === 'Escape') toggleModal();
  }

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscModalClose);
})();

const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".js-modal-btn-open");
const modalBtnClose = document.querySelector(".js-modal-btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);

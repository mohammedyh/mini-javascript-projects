const modal = document.querySelector("[data-modal]");
const openModalBtn = document.querySelector("[data-open-modal-btn]");
const closeModalBtn = document.querySelector("[data-cross-icon]");

function toggleModal() {
  openModalBtn.classList.toggle("invisible");
  modal.classList.toggle("invisible");
}

openModalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);

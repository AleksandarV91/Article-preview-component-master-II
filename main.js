const share = document.querySelector(".share-option");
const btn = document.querySelector(".share-btn");

btn.addEventListener("click", () => {
  share.classList.toggle("active");
  btn.classList.toggle("active");
});

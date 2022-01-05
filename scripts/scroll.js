const booklist = document.querySelector(".booklist-container");
const addnew = document.querySelector(".addnew-container");
const contact = document.querySelector(".contact-container");

const listLink = document.querySelector("#list-link");
const addnewLink = document.querySelector("#addnew-link");
const contactLink = document.querySelector("#contact-link");

listLink.addEventListener("click", () => {
  booklist.classList.remove("d-none");
  addnew.classList.add("d-none");
  contact.classList.add("d-none");
});

addnewLink.addEventListener("click", () => {
  booklist.classList.add("d-none");
  addnew.classList.remove("d-none");
  contact.classList.add("d-none");
});

contactLink.addEventListener("click", () => {
  booklist.classList.add("d-none");
  addnew.classList.add("d-none");
  contact.classList.remove("d-none");
});

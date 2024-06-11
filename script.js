const form = document.querySelector("form");

// i campi input
const inputName = document.getElementById("inputName");
const saveButton = document.getElementById("saveButton");
const clearButton = document.getElementById("clearButton");
const h1 = document.querySelector("h1");

// const nomi = [];
form.onsubmit = (event) => {
  event.preventDefault();
  //   nomi.push(inputName.value);
  localStorage.setItem("Nome", inputName.value);
  h1.innerHTML = localStorage.getItem("Nome");
};
clearButton.addEventListener("click", (event) => {
  localStorage.removeItem("Nome");
  inputName.value = "";
  h1.innerHTML = "Nessun nome salvato";
});

let time = 0;

setInterval(() => {
  time++;
  console.log(time);
  sessionStorage.setItem("Tempo", time);
}, 1000);
window.addEventListener("DOMContentLoaded", () => {
  const nameFromStorage = localStorage.getItem("Nome");
  if (nameFromStorage) {
    // se ho trovato il nome saremo qui dentro

    h1.innerHTML = localStorage.getItem("Nome");
  }
  const timeFromStorage = sessionStorage.getItem("Tempo");

  if (timeFromStorage) {
    time = timeFromStorage;
  }
});

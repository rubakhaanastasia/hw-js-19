//1.
const openButton = document.querySelector(".open-button");
console.log(openButton);
const closeButton = document.querySelector(".close-button");
console.log(closeButton);
const backdrop = document.querySelector(".js-backdrop");
openButton.addEventListener("click", () => {
  backdrop.style.opacity = "1";
  backdrop.style.visibility = "visible";
  backdrop.style.pointerEvents = "initial";
});

//2.
closeButton.addEventListener("click", () => {
  backdrop.style.opacity = "0";
  backdrop.style.visibility = "hidden";
  backdrop.style.pointerEvents = "none";
});

//4.
const input = document.getElementById("name-input");
const name = document.getElementById("name-output");

input.addEventListener("input", (event) => {
  console.log(event.target.value);
  if (input.value) {
    name.textContent = input.value;
  } else {
    name.textContent = "незнайомець";
  }
});

// //5.
// const fontSizeControl = document.querySelector("font-size-control");
// const textElement = document.querySelector("text");
// fontSizeControl.value = 16;
// textElement.style.fontSize = `${fontSizeControl.value}`;
// fontSizeControl.addEventListener("input", (event) => {
//   textElement.style.fontSize = `${event.target.value}`;
// });

//1.
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector('[data-action="open-modal"]');
  const closeBtn = document.querySelector('[data-action="close-modal"]');
  const backdrop = document.querySelector(".js-backdrop");

  openBtn.addEventListener("click", () => {
    document.body.classList.add("show-modal");
  });

  closeBtn.addEventListener("click", () => {
    document.body.classList.remove("show-modal");
  });

  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) {
      document.body.classList.remove("show-modal");
    }
  });
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
const sizeControl = document.querySelector(".big-text");
const textElement = document.querySelector(".text");

sizeControl.addEventListener("input", () => {
  textElement.style.fontSize = `${sizeControl.value}px`;
});

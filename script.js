"use strict";

const btnTask = document.querySelector(".todo__btn");

const input = document.querySelector(".todo__input");

const ulTodo = document.querySelector(".todo__ul");

const delBtn = document.querySelectorAll(".li__btn");

const upperCase = function (name) {
  const n = name.toLowerCase();
  const firstLetter = name[0].toUpperCase();
  const correctName = firstLetter + name.slice(1);
  return correctName;
};

btnTask.addEventListener("click", function (e) {
  const html = `<li class="todo__li">${upperCase(
    input.value
  )}<button class="li__btn">Delete</button></li>`;

  ulTodo.insertAdjacentHTML("beforeend", html);
  input.value = "";
});

// delBtn.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     let parent = this.parentElement;
//     parent.remove();
//     console.log(parent);
//   });
// });

// Event delegation

ulTodo.addEventListener("click", function (e) {
  console.log(e.target);

  if (e.target.classList.contains("li__btn")) {
    console.log(e.target);
    const parentEl = e.target.parentElement;
    parentEl.remove();
  }
});

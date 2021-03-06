// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

// const decrementBtn = document.querySelector(".decrement");
// const incrementBtn = document.querySelector(".increment");

// const counterValue = document.querySelector(".value");

// decrementBtn.addEventListener("click", function () {
//   counter.decrement();
//   console.log(counter);
// });

// incrementBtn.addEventListener("click", function () {
//   counter.incremen();
//   console.log(counter);
// });

let valueEl = Number(document.querySelector("#value").textContent);

let counterValue = document.querySelector("#value");

const dekrBtn = document.querySelector("#counter").firstElementChild;
const inkrBtn = document.querySelector("#counter").lastElementChild;

inkrBtn.addEventListener("click", (event) => {
  valueEl += 1;

  counterValue.innerText = valueEl;
});

dekrBtn.addEventListener("click", (event) => {
  valueEl -= 1;

  counterValue.innerText = valueEl;
});

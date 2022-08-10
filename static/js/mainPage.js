let options = document.querySelectorAll(
  ".container__aside__lower__list__list-item"
);

let contents = document.querySelectorAll(".container__page");

options.forEach((option, index) => {
  option.addEventListener("click", () => {
    contents.forEach((content) => {
      content.classList.remove("active-content");
    });
    options.forEach((option) => {
      option.classList.remove("active-option");
    });

    contents[index].classList.add("active-content");
    options[index].classList.add("active-option");
  });
});

let gets = document.querySelectorAll(
  ".container__page__surprises__box__info__btn"
);

let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__container__btn");

gets.forEach((get) => {
  get.addEventListener("click", () => {
    popup.classList.add("open-pop");
  });
});

closeBtn.addEventListener("click", (e) => {
  popup.classList.remove("open-pop");
});

// For FAQ
// let faqs = document.querySelectorAll(".container__page__faq__first");
// let answers = document.querySelectorAll(".container__page__faq__answer");
// let exits = document.querySelectorAll(".fa-minus");
// let pluses = document.querySelectorAll(".take-plus");

// faqs.forEach((faq, index) => {
//   faq.addEventListener("click", (e) => {
//     pluses[index].classList.add("display-none");
//     answers[index].classList.add("display-block");
//     exits[index].classList.add("display-block");
//   });
// });

// exits.forEach((exit, index) => {
//   exit.addEventListener("click", (e) => {
//     answers[index].classList.remove("display-block");
//     exits[index].classList.remove("display-block");
//     pluses[index].classList.remove("display-none");
//     console.log(answers[index]);
//     console.log(exits[index]);
//     console.log(pluses[index]);
//   });
// });

let faqs = document.querySelectorAll(".container__page__faq");
let panels = document.querySelectorAll(".container__page__faq__answer");
let exits = document.querySelectorAll(".fa-minus");
let pluses = document.querySelectorAll(".take-plus");

faqs.forEach((faq, index) => {
  faq.addEventListener("click", () => {
    panels[index].style.maxHeight = "20rem";
    exits[index].classList.add("display-block");
    pluses[index].classList.add("display-none");

    exits[index].addEventListener("click", (e) => {
      panels[index].style.maxHeight = "0px";
      e.target.classList.remove("display-block");
      e.stopPropagation();
      pluses[index].classList.remove("display-none");
    });
  });
});
// exits.forEach((exit, index) => {
//   exit.addEventListener("click", (e) => {
//     panels[index].style.maxHeight = "0";
//     console.log(e.target);
//     pluses[index].classList.remove("display-none");
//   });
// });

// For Interactive Color Change
const mark = document.querySelector(
  ".container__page__table__main__row__op-amount"
);

if (mark.innerHTML > 0) {
  mark.classList.add("color-green");
} else if (mark.innerHTML < 0) {
  mark.classList.add("color-red");
}

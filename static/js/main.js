let options = document.querySelectorAll(
    ".main__right__login__form__options__label__element"
  );
  
  let contents = document.querySelectorAll(
    ".main__right__login__form__options__input__group"
  );
  
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
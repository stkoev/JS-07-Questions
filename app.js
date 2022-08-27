//using selectors inside the element
// traversing the dom

// const btns = document.querySelectorAll(".question-btn");
// const btnArr = Array.from(btns);
// console.log(btnArr);
// btnArr.map((btn) => {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  console.log(question);
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

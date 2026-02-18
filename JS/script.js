const buttons = document.querySelectorAll(".main-btn");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    Calendly.initPopupWidget({
      url: "https://calendly.com/dipoldas182/frontend-consultation",
    });
    return false;
  });
});

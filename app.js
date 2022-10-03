(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  // retrieved data from numbers that are clicked
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  // result when equal is clicked
  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "Please enter a value";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  // clears the screen when clear is clicked
  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();

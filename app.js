const output = document.querySelector(".output");

setInterval(timer, 1000);

function timer() {
  const output = document.querySelector(".output");
  output.innerHTML = output.innerHTML - 1;
}

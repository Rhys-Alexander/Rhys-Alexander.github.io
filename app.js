function trigger(key, event) {
  let xhr = new XMLHttpRequest();

  let url =
    "https://maker.ifttt.com/trigger/" +
    event +
    "/with/key/" +
    key +
    "?value1=" +
    navigator.platform;

  xhr.open("POST", url);
  xhr.send();
}

function timer() {
  output.innerHTML = output.innerHTML - 1;
}

const output = document.querySelector(".output");

trigger("Y97kwnMcn-AuvViUSwwYS", "visited");
setInterval(timer, 1000);

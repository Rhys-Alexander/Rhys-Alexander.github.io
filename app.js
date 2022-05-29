function getMeme() {
  return "https://youtu.be/BrF3KV7K8NM";
}

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
  if (output.innerHTML > 0) {
    output.innerHTML -= 1;
  } else {
    window.location.replace(getMeme());
  }
}

const output = document.querySelector(".output");
trigger("Y97kwnMcn-AuvViUSwwYS", "visited");
setInterval(timer, 1000);

function getMeme(last = false) {
  const memes = [
    "https://youtu.be/BrF3KV7K8NM",
    "https://youtu.be/Y-Q8HCS1CvI",
    "https://youtu.be/nCqucxRNSNI",
    "https://youtu.be/1jAJbvd7mwk",
    "https://youtu.be/WUYT5Jpf5To",
    "https://youtu.be/8OzZxjqKG10",
    "https://youtu.be/HDkGb-cOXQo",
    "https://youtu.be/av-rLcM5AgY",
    "https://youtu.be/SckcB099zrg",
    "https://youtu.be/cqm04NmUi0Y",
    "https://youtu.be/20fOd35l3Pg",
    "https://youtu.be/bij5nqHOzvk",
    "https://youtu.be/-LTtripsg5U",
    "https://youtu.be/tjQiSsmiToE",
    "https://youtu.be/Y1ICyf-ETts",
    "https://youtu.be/YCeQLeQiRP4"
  ];
  return last
    ? memes.slice(-1)
    : memes[Math.floor(Math.random() * memes.length)];
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

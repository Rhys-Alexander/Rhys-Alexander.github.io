function getDateTime() {
  const today = new Date();
  return (
    today.getMonth() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getFullYear() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds()
  );
}
function sendJSON() {
  // Creating a XHR object
  let xhr = new XMLHttpRequest();

  // open a connection
  xhr.open(
    "POST",
    "https://maker.ifttt.com/trigger/visted/json/with/key/Y97kwnMcn-AuvViUSwwYS",
    true
  );

  // Set the request header i.e. which type of content you are sending
  xhr.setRequestHeader("Content-Type", "application/json");

  const data = JSON.stringify({ Value1: getDateTime() });
  console.log(data);
  xhr.send(data);
}

function timer() {
  const output = document.querySelector(".output");
  output.innerHTML = output.innerHTML - 1;
}

const output = document.querySelector(".output");

sendJSON();
setInterval(timer, 1000);

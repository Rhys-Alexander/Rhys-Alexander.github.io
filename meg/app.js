// navbar
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
  navToggle.classList.toggle("turn-toggle");
});

// generation of compliment

const button = document.querySelector(".button");
const output = document.querySelector(".output");
button.addEventListener("click", () => {
  output.innerHTML = get_compliment();
});

var line = 0;

function get_compliment() {
  const compliments = [
    "Talking to you, about anything! Everything I do is made better by sharing it with you",
    "You encourage me in everything I do and support me",
    "Your eyes",
    "Cooking with you! Nothing tastes better",
    "Dancing with you, butterflies every time :)",
    "You show me a different side of life, our relationship has been this amazing adventure to me",
    "Meg is fit! Whoo Whoo",
    "How hard you work",
    "How much you've achieved",
    "You've made me a better person, friend, and boyfriend",
    "Holding you makes me feel at home",
    "Your smile, it reminds me how lucky I am, and how beautiful you are",
    "You understand me, I feel so comfortable around you",
    "I can have a real conversation with you. I can discuss ideas and you build on them.",
    "Your laugh, making you laugh makes my day",
    "Kissing your lips",
    "You're so caring and kind",
    "The more time I spend with you, the more I love you",
    "You've shown me feelings I didn't no I had.",
    "You're absolutely stunning",
    "Bunda :)",
  ];
  while (line < compliments.length) {
    const compliment = line;
    line++;
    return compliments[compliment];
  }
  while (true) {
    const random = Math.floor(Math.random() * compliments.length);
    if (compliments[random] !== output.innerHTML) {
      return compliments[random];
    }
  }
}

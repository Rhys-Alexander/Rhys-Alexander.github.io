// button for generating compliments
const button = document.querySelector(".button");
const output = document.querySelector(".output");
button.addEventListener("click", () => {
  output.innerHTML = get_compliment();
});

var line = 0;

function get_compliment() {
  const compliments = [
    "You encourage me in everything I do and it makes feel so appreciated",
    "You've helped me learn to be independent and confident",
    "You've fed my curiosity and I'm so grateful as I wouldn't be the interested person I am without that",
    "I love talking to you, about anything! I'm able to have real interesting conversations with you",
    "I admire your selflessness and humility, I really look up to you",
    "I've got no clue how you can work with Mum sometimes, God I envy you ;)",
    "I feel so proud to have you as a Dad",
    "I owe so much to you for teaching me when I was young, for showing me how much fun learning is",
    "You're never short of intresting topics and ideas to discuss",
    "I love a good Dad meal, tasty and healthy, what more could I ask for!",
    "You're never arrogant, you do your research before you take a stance and even then you accept you may be wrong, it's laudible",
    "You've encouraged me to see both sides, to see the gray from the black and white, to not be ideological",
    "You made ME! that's pretty cool :)",
    "We can laugh together about clever and niche things",
    "You understand me well, the way I think about things, my rationale, it's very comforting",
    "You do what you want, nevermind convention, if you like it you like it, it's very cool",
    "'Well, seen as it's you' always made me feel special",
    "You're English",
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

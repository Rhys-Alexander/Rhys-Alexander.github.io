// button for generating memories
const button = document.querySelector(".button");
const output = document.querySelector(".output");
button.addEventListener("click", () => {
  output.innerHTML = getMemory();
});

var line = 0;

function getMemory() {
  const memories = [
    "The hours in the car park of laughs, and hundreds of purple fruit shoots",
    "Look at me Mum! Look at me! Look at me!",
    "Driving to Butterlins with all of us singing the lazy song",
    "Head banging tgether to the music in the car, nirvana, exit international, david bowie!",
    "Au revoir, Au revooouiur, Adios, Adioooohooos",
    "When you took me to see Bully even though you felt ill, and you got that picture of me and Alicia Bognanno",
    "On my birthday when I was young and Ratatouille said Bon Appetit as we started cutting into the Vienetta",
    "Going to the Harvester after parents evening and getting a rack of ribs and loads of bacon bits",
    "There's no place like home",
    "Going for a mooch in town, Lego store, GAME, and then going for food, sometimes the Red Hot Buffet!",
    "All my crazy Birthday cakes you made me, like the rubiks cube!",
    "Going for pizza on Wellfield Road after Cylch and reading the Gruffalo",
    "Blackwood pantomime at Christmas, I don't know how many times I've been on that stage",
    "Elvis Trubute",
    "P L L",
    "Skipping down the street after Oliver!",
    "Seeing shows in the New Theatre, or as you say it, the New Theaaaaeetre",
    "Cleaning up my sick after I ate 11 burgers at family camp",
    "pushing me on the swing, going high in the sky, on our way, to holidays!",
    "How much you loved Insomnia 58",
    "Going to see the Curious Incident of the Dog in the Night Time... a year early",
    "Rushing to get to school and then realising it was holidays",
    "When I got on my knees and begged you for that microscope",
    "Getting thins slices of salami from the deli and a pastry from the bakery on our way around sainsburys",
    "Dunelm... need I say more?",
    "Going on our trips to Camden, going to the market, and then the Blues Kitchen",
    "Sleepy by for Rhyso",
  ];
  while (line < memories.length) {
    const compliment = line;
    line++;
    return memories[compliment];
  }
  while (true) {
    const random = Math.floor(Math.random() * memories.length);
    if (memories[random] !== output.innerHTML) {
      return memories[random];
    }
  }
}

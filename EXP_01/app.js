import figlet from "figlet";
import randomWord from "random-word";

const word = randomWord();

figlet(word, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});


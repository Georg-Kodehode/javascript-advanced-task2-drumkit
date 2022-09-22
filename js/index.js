// instructions

// create a button
// add an event listener to it that captures click events
// after testing that it works, try to make it play a sound when its clicked
// sound files are located in the sounds folder

// after you get one button working, try to create some more
// in class i used an array to store the file names, you could do that, or you can do it your own way.

// const sounds2 = [
//   "clap.wav",
//   "hihat.wav",
//   "kick.wav",
//   "openhat.wav",
//   "ride.wav",
//   "snare.wav",
//   "tink.wav",
//   "tom.wav",
// ];

// Array of sound objects, each having a .wav-file and a keyboard key
const sounds = [
  {
    drumSound: "clap.wav",
    drumKey: "q",
  },
  {
    drumSound: "hihat.wav",
    drumKey: "w",
  },
  {
    drumSound: "kick.wav",
    drumKey: "e",
  },
  {
    drumSound: "openhat.wav",
    drumKey: "r",
  },
  {
    drumSound: "ride.wav",
    drumKey: "t",
  },
  {
    drumSound: "snare.wav",
    drumKey: "y",
  },
  {
    drumSound: "tink.wav",
    drumKey: "u",
  },
  {
    drumSound: "tom.wav",
    drumKey: "i",
  },
];

const drumkit = document.getElementById("drumkit");

// Creates all the buttons
function createBtns() {
  // Loops through all the sound objects in the sounds array
  for (i = 0; i < sounds.length; i++) {
    // Creates the audio objects
    const audio = new Audio(`./sounds/${sounds[i].drumSound}`);
    const key = sounds[i].drumKey;
    const btn = document.createElement("button");
    // Appends the current button created to the drumkit element
    drumkit.append(btn);
    // Adds a keydown event listener to the window
    window.addEventListener("keydown", (event) => {
      // Only plays audio if the correct key is used
      if (key === event.key) audio.play();
    });
    // Adds a click event listener to the current button
    btn.addEventListener("click", () => {
      // Plays the sound belonging to the button clicked
      audio.play();
    });
  }
}

createBtns();

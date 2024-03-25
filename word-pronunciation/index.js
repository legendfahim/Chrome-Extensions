let speakBtn = document.getElementById("speakButton");
let wordInput = document.getElementById("wordInput");
let text = document.getElementById("wordInput");
//Function for Speak
const speak = () => {
  let utterance;
  if (text.value === "") {
    utterance = new SpeechSynthesisUtterance("Please enter your text");
  } else {
    utterance = new SpeechSynthesisUtterance(text.value);
  }
  speechSynthesis.speak(utterance);
};

wordInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    speak();
  }
});

speakBtn.addEventListener("click", speak);

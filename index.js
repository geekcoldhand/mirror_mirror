let textResult = "";
const outputDiv = document.getElementById("output");
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
const synth = window.speechSynthesis;

const stopButton = document
  .getElementById("stop-btn")
  .addEventListener("click", (event) => handleStopButtonClick(event), false);
const startButton = document
  .getElementById("start-btn")
  .addEventListener("click", (event) => handleStartButtonClick(event), false); //TODO: this click need to be socket connection
recognition.interimResults = true;
recognition.continuous = true;

function handleStartButtonClick(event) {
  console.log(event.target);
  event.preventDefault();
  recognition.start();
  startButton.disabled = true;
  outputDiv.textContent = "Recording...";
}
function handleStopButtonClick(event) {
  console.log("Stop button clicked.");
  event.preventDefault();
  recognition.stop();
  const utterThis = new SpeechSynthesisUtterance(textResult);
  synth.speak(utterThis);
}

recognition.onresult = (event) => {
  const result = event.results[event.results.length - 1][0].transcript;
  textResult = result;
  outputDiv.textContent = result;
  //TODO: Send result to server
};

recognition.onend = () => {
  startButton.disabled = false;
  startButton.textContent = "Start Recording";
};

recognition.onerror = (event) => {
  console.error("Speech recognition error:", event.error);
};

recognition.onnomatch = () => {
  console.log("No speech was recognized.");
};

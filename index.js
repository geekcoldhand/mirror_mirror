const outputDiv = document.getElementById("output");
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
const stopButton = document
  .getElementById("stop-btn")
  .addEventListener("onclick", handleStopButtonClick(), false);
const startButton = document
  .getElementById("start-btn")
  .addEventListener("click", handleStartButtonClick, false);
// recognition.interimResults = true;
// recognition.continuous = true;

function handleStartButtonClick() {
  console.log("Start button clicked.");
  recognition.start();
  startButton.disabled = true;
  outputDiv.textContent = "Recording...";
}
function handleStopButtonClick() {
  console.log("Stop button clicked.");
  outputDiv.textContent = "stopped...";
}

recognition.onresult = (event) => {
  const result = event.results[event.results.length - 1][0].transcript;
  outputDiv.textContent = result;
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

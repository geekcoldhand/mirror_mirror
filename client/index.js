const startButton = document.getElementById('startButton');
const outputDiv = document.getElementById('output');
const babelRecognition = new webkitSpeechRecognition() || new SpeechRecognition();

babelRecognition.interimResults = true;
babelRecognition.continuous = true;

startButton.addEventListener('click', () => {
    babelRecognition.start();
    startButton.disabled = true;
    startButton.textContent = 'Recording...';
});

babelRecognition.onresult = event => {
    const result = event.results[event.results.length - 1][0].transcript;
    outputDiv.textContent = result;
};

babelRecognition.onend = () => {
    startButton.disabled = false;
    startButton.textContent = 'Start Recording';
};

babelRecognition.onerror = event => {
    console.error('Speech recognition error:', event.error);
};

babelRecognition.onnomatch = () => {
    console.log('No speech was recognized.');
};
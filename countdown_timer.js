const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countdownTimer(seconds) {
  const interval = setInterval(() => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    process.stdout.write(`Time remaining: ${mins}:${secs < 10 ? '0' + secs : secs} \r`);
    seconds--;

    if (seconds < 0) {
      clearInterval(interval);
      console.log("\nTime's up!");
      rl.close();
    }
  }, 1000);
}

rl.question('Enter time in seconds: ', (input) => {
  const timeInSeconds = parseInt(input);
  countdownTimer(timeInSeconds);
});

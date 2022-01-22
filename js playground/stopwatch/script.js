/* Stopwatch */

const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const clearButtonTag = document.getElementsByClassName("clearButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];
const millisecondsTag = document.getElementsByClassName('milliSeconds')[0];

let seconds =0, minutes = 0, hours = 0, milliseconds = 0;
const startTime = () => {
  milliseconds += 10;
  if(milliseconds === 1000){
        milliseconds = 0;
        seconds += 1;
  
    if (seconds===60){
      seconds=0;
      minutes+=1;
      if (minutes===60){
        minutes=0;
        hours+=1;
      }
    }  
  }
  const secondText = seconds<10 ? "0"+ seconds.toString() : seconds; 
  const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const hourText = hours < 10 ? "0" + hours.toString() : hours;
  let millisecondText = milliseconds 
  if(millisecondText<100){
    millisecondText = "00" + milliseconds.toString();
  }
  else if (millisecondText<1000){
    millisecondText = "0" + milliseconds.toString();
  }
  else{
    millisecondText=milliseconds;
  }

  millisecondsTag.textContent = millisecondText;
  stopWatchTag.textContent = hourText+":"+minuteText+":"+secondText;
};

let intervalId;
startButtonTag.addEventListener("click", () => {
  intervalId = setInterval(startTime, 10);
});

pauseButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
});
continueButtonTag.addEventListener("click",() =>{
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 1);
});
clearButtonTag.addEventListener("click",() =>{
  clearInterval(intervalId);
  milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
  const secondText = "0"+ seconds.toString() ;
  const minuteText = "0" + minutes.toString();
  const hourText = "0" + hours.toString();
  const millisecondText ="000" + milliseconds.toString();
  millisecondsTag.textContent = millisecondText;
  stopWatchTag.textContent = hourText+":"+minuteText+":"+secondText;
});  

restartButtonTag.addEventListener("click",() =>{
  clearInterval(intervalId);
  milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
  intervalId = setInterval(startTime, 1);
});

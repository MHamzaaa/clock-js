const hourHand = document.querySelector('.hour');
const minHand = document.querySelector('.minute');
const secHand = document.querySelector('.second');

const digiHour = document.querySelector('.currentHourShow');
const digiMin = document.querySelector('.currentMinShow');
const digisSec = document.querySelector('.currentSecShow');

const showDate = document.querySelector('.showDate');


function rotate() {
    
  const currentDate = new Date();

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const secondsFraction = seconds / 60;
  const minutesFraction = (secondsFraction + minutes) / 60;
  const hoursFraction = (minutesFraction + hours) / 12;

  const secondsRotate = secondsFraction * 360;
  const minutesRotate = minutesFraction * 360;
  const hoursRotate = hoursFraction * 360;

  secHand.style.transform = `rotate(${secondsRotate}deg)`;
  minHand.style.transform = `rotate(${minutesRotate}deg)`;
  hourHand.style.transform = `rotate(${hoursRotate}deg)`;
}

setInterval(rotate,1000);


// digiHour.innerHTML = `${hourShowDigi + "<h1>Hours</h1>"}`
// digiMin.innerHTML = `${minShowDigi + "<h1>Minutes</h1>" }`
// digisSec.innerHTML = `${secShowDigi + "<h1>Seconds</h1>" }`



let clock = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  let time = `${hrs}:${mins}:${secs}`;
  document.querySelector('.digitalClockContainer').innerText = time;
  setTimeout(clock, 1000);
};

clock();




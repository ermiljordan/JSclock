const secondHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log(hours);
};

setInterval(setDate, 1000);

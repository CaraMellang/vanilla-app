const clock = document.querySelector("h2#clock");

const getClock = () => {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minute}:${seconds}`;
};

setInterval(getClock, 1000);

const images = [
  "두개의 탑.jpeg",
  "야간 테라스.jpeg",
  "엘리니아.jpeg",
  "입구.jpeg",
  "최하층.jpeg",
  "탑.jpeg",
  "하늘테라스.jpeg",
  "하인즈.jpeg",
];

const randomImg = images[Math.floor(Math.random() * images.length)];

// const bgimg = document.querySelector("img");
const bgimg = document.createElement("img");

bgimg.src = `./img/${randomImg}`;

document.body.appendChild(bgimg);
console.log(bgimg);

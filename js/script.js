const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const btnLeft2 = document.getElementById("btn-2left");
const btnRight2 = document.getElementById("btn-2right");
const slide = document.getElementById("slide");
const result = document.getElementById("result");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");
const number6 = document.getElementById("number6");

const imgInput = document.getElementById("image-input");
const goImg = document.getElementById("go-btn");
const images = [
  "./images/mac1.webp",
  "./images/mac2.webp",
  "./images/mac3.jpg",
  "./images/mac4.webp",
  "./images/mac5.webp",
  "./images/mac6.webp",
];
let active = 0;

let slideChange = (direction) => {
  active += direction;

  if (active < 0) active = images.length - 1;
  if (active >= images.length) active = 0;
};

let updateSlide = () => {
  slide.src = images[active];
  result.innerHTML = active + 1;
};

let selectSlide = (index) => {
  active = index;
  updateSlide();
};

goImg.onclick = () => {
  let inputValue = Number(imgInput.value);
  imgInput.value = "";

  if (inputValue < 1 && inputValue > images.length) {
    active = inputValue - 1;
    updateSlide();
  } else {
    alert('Invalid number')
  }
};

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
  "./images/mac5.jpg",
  "./images/mac6.jpg",
];
let active = 0;

let changeSlide = (direction) => {
  active = (active + direction + images.length) % images.length;


  updateSlide();
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

  if (inputValue >= 1 && inputValue < images.length) {
    active = inputValue - 1;
    updateSlide();
  } else {
    alert("Invalid number");
  }
};

btnLeft.onclick = () => changeSlide(-1);
btnRight.onclick = () => changeSlide(1);
btnLeft2.onclick = () => changeSlide(-2);
btnRight2.onclick = () => changeSlide(+2);

number1.onclick = () => selectSlide(0);
number2.onclick = () => selectSlide(1);
number3.onclick = () => selectSlide(2);
number4.onclick = () => selectSlide(3);
number5.onclick = () => selectSlide(4);
number6.onclick = () => selectSlide(5);

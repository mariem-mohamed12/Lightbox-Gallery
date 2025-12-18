let imgs = Array.from(document.querySelectorAll(".item .image img"));
let lightContainer = document.getElementById("lightBoxContainer");
let boxConatiner = document.querySelector(".box");
let closeBtn = document.getElementById("close");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let index;

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    index = imgs.indexOf(imgs[i]);
    let currentImage = e.target.getAttribute("src");
    boxConatiner.style.backgroundImage = `url(${currentImage})`;
    lightContainer.classList.remove("d-none");
  });
}

closeBtn.addEventListener("click", function () {
  close();
});
nextBtn.addEventListener("click", function () {
  slide(1);
});
prevBtn.addEventListener("click", function () {
  slide(-1);
});

function slide(step) {
  index += step;
  if (index == -1) {
    index = imgs.length - 1;
  }
  if (index == imgs.length) {
    index = 0;
  }
  var imgSrc = imgs[index].getAttribute("src");
  boxConatiner.style.backgroundImage = `url(${imgSrc})`;
}

function close() {
  lightContainer.classList.add("d-none");
}

document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowRight") {
    slide(1);
  } else if (e.key === "ArrowLeft") {
    slide(-1);
  } else if (e.key === "Escape") {
    close();
  }
});

lightContainer.addEventListener("click", function () {
  close();
});

boxConatiner.addEventListener("click", function (e) {
  e.stopPropagation();
});

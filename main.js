//анимация при наведении
const blockAnimation = document.querySelectorAll(".content__information");

blockAnimation.forEach((block) => {
  const image = block.querySelector(".information__image img");
  const paragraphs = block.querySelectorAll(".information__description p");

  block.addEventListener("mouseover", function () {
    image.style.transform = "scale(1.2)";
    image.style.opacity = "0.3";
    if (window.innerWidth >= 550) {
      paragraphs.forEach((paragraph) => {
        paragraph.style.opacity = "1";
      });
    }
    this.style.boxShadow = "0 0 20px rgba(12, 96, 12, 0.8)";
  });

  block.addEventListener("mouseout", function () {
    image.style.transform = "scale(1)";
    image.style.opacity = "0.7";
    if (window.innerWidth >= 550) {
      paragraphs.forEach((paragraph) => {
        paragraph.style.opacity = "0";
      });
    }
    this.style.boxShadow = "none";
  });

  image.style.transition = "transform 0.3s, opacity 0.3s";
});

//смена цвета иконки telegram
const image = document.getElementById("image");
const imageLink = document.getElementById("imageContainer");

const defaultImageSrc = image.src;

const newImageSrc = "./img/greenTelegram-icon.svg";

imageLink.addEventListener("mouseover", function () {
  image.src = newImageSrc;
});

imageLink.addEventListener("mouseout", function () {
  image.src = defaultImageSrc;
});

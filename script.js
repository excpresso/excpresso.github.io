function changeImage(element, newImage) {
  element.querySelector('img').src = newImage;
}

const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
const images = carouselContainer.querySelectorAll('img');
const totalImages = images.length;
const imageWidth = images[0].clientWidth;

function showImage(index) {
  carouselContainer.style.transform = `translateX(-${index * imageWidth}px)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, totalImages - 1);
  showImage(currentIndex);
});

function replaceWithGame() {
  var container = document.getElementById("container");
  var gameUrl = "https://itch.io/embed-upload/7577153?color=de5ad0"; // Replace with the URL of the embedded game

  var iframe = document.createElement("iframe");
  iframe.src = gameUrl;
  iframe.width = "320";
  iframe.height = "500";

  container.innerHTML = ""; // Clear the container
  container.appendChild(iframe); // Append the iframe to the container
}

// Add this JavaScript code at the end of the body or in a separate script file
const menuToggle = document.getElementById('menu-toggle');
const menuLabel = document.querySelector('.menu-icon');

menuToggle.addEventListener('change', function() {
  if (menuToggle.checked) {
    menuLabel.classList.add('open');
  } else {
    menuLabel.classList.remove('open');
  }
});

function toggleImage() {
  var image = document.getElementById("menuimage");
  var currentSrc = image.src;
  var newSrc = "";

  if (currentSrc.endsWith("menu.png")) {
    newSrc = "menu2.png";
  } else {
    newSrc = "menu.png";
  }

  image.src = newSrc;
}
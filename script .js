document.addEventListener("DOMContentLoaded", function () {

  const openBtn = document.getElementById("openBtn");
  const loader = document.getElementById("loader");
  const main = document.getElementById("main");
  const slide = document.getElementById("slide");

  const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpg",
    "photo8.jpg",
    "photo9.jpg",
    "photo10.jpg"
  ];

  let current = 0;

  openBtn.addEventListener("click", function () {
    loader.style.display = "none";
    main.style.display = "block";

    setInterval(function () {
      current = (current + 1) % photos.length;
      slide.src = photos[current];
    }, 3000);
  });

});
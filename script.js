document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("openBtn");
  const loader = document.getElementById("loader");
  const main = document.getElementById("main");

  btn.onclick = function () {
    alert("Happy Birthday Sneha ❤️");
    loader.style.display = "none";
    main.style.display = "block";
  };
});

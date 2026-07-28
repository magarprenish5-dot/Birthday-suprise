const openBtn = document.getElementById("openBtn");
const loader = document.getElementById("loader");
const main = document.getElementById("main");

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

let i = 0;

openBtn.onclick = function(){

loader.style.display="none";

main.style.display="block";

setInterval(changePhoto,3000);

}

function changePhoto(){

i++;

if(i>=photos.length){

i=0;

}

document.getElementById("slide").src=photos[i];

}
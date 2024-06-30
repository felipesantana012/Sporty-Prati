let imagens = [
  "https://static.independent.co.uk/2022/05/19/10/spotify%20cost.jpg?width=1200&height=630&fit=crop",
  "https://m.media-amazon.com/images/I/A1nA5rZzXtL.png",
  "https://cdn1.epicgames.com/offer/61dbcd85808d4125ba873ba90385949b/EGS_SpotifyMusicandPodcasts_SpotifyAB_S1_2560x1440-aee46a0586da12280c7937642e39cd50",
  "https://img.youtube.com/vi/mxMj6faysY4/maxresdefault.jpg",
  "https://storage.googleapis.com/pr-newsroom-wp/1/2024/04/spotify-classics-100-greatest-rb-rnb-songs-streaming-era-1440x810.jpg",
 
];

// let titulos = [
//   "Musica Para todos",
//   "Alguma coisa aqui",
//   "Título 3",
// ];

imagens.forEach((element) => {
  let gallery = document.getElementById("gallery");

  let slides = document.createElement("div");
  slides.className = "slide";

  let img = document.createElement("img");
  img.src = element;
  slides.appendChild(img);

  // let h2 = document.createElement("h2");
  // h2.textContent = element;
  // slides.appendChild(h2);

  gallery.appendChild(slides);
});

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("prev", "next", "show");
    if (i == slideIndex - 1) {
      slides[i].classList.add("show");
    } else if (
      i == slideIndex - 2 ||
      (slideIndex == 1 && i == slides.length - 1)
    ) {
      slides[i].classList.add("prev");
    } else if (i == slideIndex || (slideIndex == slides.length && i == 0)) {
      slides[i].classList.add("next");
    }
  }
}

let slideIndex = 1;
showSlides(slideIndex);
let tempo = 5000;
let autoSlideInterval = setInterval(autoSlide, tempo);

function moveSlide(n) {
  clearInterval(autoSlideInterval);
  showSlides((slideIndex += n));
  autoSlideInterval = setInterval(autoSlide, tempo);
}

function autoSlide() {
  moveSlide(1);
}

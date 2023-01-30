const musicButton = document.querySelector(".musicButton");
const bonfireButton = document.querySelector(".bonfire");
const hiddenCatalogue = document.querySelector(".catalogue-hidden");
const shopButton = document.querySelectorAll(".button");

musicButton.addEventListener("click", (e) => {
  musicButton.className = "musicButton-disabled";
});

bonfireButton.addEventListener("click", (e) => {
  bonfireButton.className = "bonfire-hidden";
  hiddenCatalogue.className = "catalogue";
  var audio = document.querySelector(".bonfireSfx");
  audio.play();
});

shopButton.forEach((e) =>
  e.addEventListener("mouseenter", (e) => {
    var audio = document.querySelector(".selectSfx");
    audio.currentTime = 0;
    audio.play();
  })
);

shopButton.forEach((e) =>
  e.addEventListener("click", (e) => {
    var audio = document.querySelector(".okSfx");
    audio.currentTime = 0;
    audio.play();
  })
);

console.log(5);

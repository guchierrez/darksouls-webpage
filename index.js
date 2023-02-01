const musicButton = document.querySelector(".musicButton");
const bonfireButton = document.querySelector(".bonfire");
const hiddenCatalogue = document.querySelector(".catalogue-hidden");
const shopButton = document.querySelectorAll(".button");
const pwnButtonHidden = document.querySelector(".pwn-button-hidden");

const bgm = document.getElementById("firelink");
bgm.volume = 0.3;
var isPlaying = false;

function togglePlay() {
  isPlaying ? bgm.pause() : bgm.play();
}

bgm.onplaying = function () {
  isPlaying = true;
};
bgm.onpause = function () {
  isPlaying = false;
};

function toggleStyle() {
  document.getElementById("music-btn").classList.toggle("musicButton-disabled");
}

function okSfx() {
  var audio = document.querySelector(".okSfx");
  audio.currentTime = 0;
  audio.play();
}

function selectSfx() {
  var audio = document.querySelector(".selectSfx");
  audio.currentTime = 0;
  audio.play();
}

const styles = `.button:not([disabled]):hover  {
  background-color: rgba(87, 37, 13, 0.8);
  cursor: pointer;
}`;

shopButton.forEach((e) =>
  setTimeout(() => {
    e.addEventListener("mouseenter", (e) => {
      const stylesheet = document.createElement("style");
      stylesheet.innerText = styles;
      document.head.appendChild(stylesheet);
    });
  }, 4000)
);

let condition = 0;

document.getElementById("btn-13").addEventListener("click", (e) => {
  okSfx();
  bonfireButton.className = "bonfire-hidden";
  hiddenCatalogue.className = "catalogue";
});

for (let idNumber = 1; idNumber < 13; idNumber++) {
  setTimeout(() => {
    document
      .getElementById(`btn-${idNumber}`)
      .addEventListener("mouseenter", selectSfx, true);
    document
      .getElementById(`btn-${idNumber}`)
      .addEventListener("click", (e) => {
        condition++;
        console.log(condition);
        okSfx();
        document.getElementById(`product-${idNumber}`).className =
          "product-fake";
        document.getElementById(`btn-${idNumber}`).disabled = true;
        document
          .getElementById(`btn-${idNumber}`)
          .removeEventListener("mouseenter", selectSfx, true);

        if (condition >= 11) {
          document.querySelector(".product-hidden").className = "product";
          document.getElementById("btn-12").className = "button";
        }
      });
  }, 4000);
}

function stopBgm() {
  bgm.remove();
}

var audio = document.getElementById("legendneverdies");

function changeVideo() {
  document.getElementById("bg-video").src =
    "./background/THE_LEGEND_NEVER_DIES.mp4";
}

function hideHud() {
  document.querySelector(".catalogue").className = "catalogue-hidden";
  document.querySelector("nav").className = "nav-hidden";
}

function showVideo() {
  document.getElementById("bg-video").src = "./background/Dark Souls.mp4";
  document.querySelector(".back-video-hidden").className = "back-video";
  document.querySelector(".landing").className = "landing-hidden";
  bgm.play();
}

function bonfireBehaviour() {
  setTimeout(() => {
    document.getElementById("btn-13").addEventListener("mouseenter", (e) => {
      selectSfx();
    });
  }, 3000);
}

const styleBonfire = `.bonfire:hover {
  background-color: rgba(87, 37, 13, 0.8);
  cursor: pointer;
}`;

function bonfireHover() {
  setTimeout(() => {
    document.getElementById("btn-13").addEventListener("mouseenter", (e) => {
      const stylesheet = document.createElement("style");
      stylesheet.innerText = styleBonfire;
      document.head.appendChild(stylesheet);
    });
  }, 3000);
}

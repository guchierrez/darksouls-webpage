const stylesheet = document.createElement("style");
stylesheet.innerText = styles;
document.head.appendChild(stylesheet);

for (let idNumber = 1; idNumber < 14; idNumber++) {
  setTimeout(() => {
    document
      .getElementById(`btn-${idNumber}`)
      .addEventListener("mouseenter", (e) => {
        selectSfx();
      });
  }, 4000);
}

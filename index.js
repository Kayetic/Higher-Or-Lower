const higherLowerText = document.querySelector(".higher-lower-text");

// Calculate the viewport height and represent it as CSS custom property
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

// Recalculate on resize
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

setTimeout(function () {
  higherLowerText.style.letterSpacing = "4px";
  higherLowerText.style.fontSize = "4rem";
}, 100);

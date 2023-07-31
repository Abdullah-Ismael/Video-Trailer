const closeI = document.querySelector("i");
const btn = document.querySelector("button");
const videoTrail = document.querySelector(".video-trail");
const videoEl = document.querySelector("video");

btn.addEventListener("click", () => {
  videoTrail.classList.add("active");
});

closeI.addEventListener("click", () => {
  videoTrail.classList.remove("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});

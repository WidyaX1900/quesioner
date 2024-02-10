const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseenter", (event) => {
  noBtn.style.position = "absolute";
  noBtn.style.transform = `translateX(${randomPosition()}px)`;
  noBtn.style.transform += `translateY(${randomPosition()}px)`;
  noBtn.style.transition = `transform 0.3s`;
});

function randomPosition() {
  let pos = Math.floor(Math.random() * 300) + 10;
  return pos;
}

function yes() {
  const questionerBox = document.getElementsByClassName("questioner-box");
  questionerBox[1].classList.remove("hidden");
  questionerBox[0].classList.add("hidden");
}

function no() {
  noBtn.remove();
}

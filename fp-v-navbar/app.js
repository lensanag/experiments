const main = document.querySelector(".container");
const section1 = document.querySelector(".navbar");
let lastTop = 0;
const scrollEvent = (e) => {
  console.log(e);
  let diff = lastTop - main.scrollTop;
  if (diff < -5) {
    section1.classList.add("slide-out");
    section1.classList.remove("slide-in");
  } else {
    section1.classList.add("slide-in");
    section1.classList.remove("slide-out");
  }
  lastTop = main.scrollTop;
};

const debounced = window._.debounce(scrollEvent, 250);

main.addEventListener("scroll", debounced);

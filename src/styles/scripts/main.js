const titles = [
  "Desenvolvedor Web",
  "Front-end Dev",
  "Criador de interfaces"
];

let titleIndex = 0;
let charIndex = 0;
let deleting = false;
const el = document.getElementById("typed-title");

function type() {
  const current = titles[titleIndex];

  if (!deleting) {
    el.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    el.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
  }

  setTimeout(type, deleting ? 60 : 100);
}

type();
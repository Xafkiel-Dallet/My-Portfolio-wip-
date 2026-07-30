const menuToggle = document.querySelector(".menu-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
});

const words = [
  "Junior Programmer",
  "Student",
  "Front-End Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing-text");

function type() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typingText.textContent = currentWord.substring(0, charIndex++);
  } else {
    typingText.textContent = currentWord.substring(0, charIndex--);
  }

  if (!deleting && charIndex > currentWord.length) {
    deleting = true;
    setTimeout(type, 1200);
    return;
  }

  if (deleting && charIndex < 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(type, deleting ? 50 : 100);
}

type();

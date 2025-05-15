const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
}

const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const typedText = document.getElementById("typed");
  const phrases = ["Frontend Developer", "Web Designer", "UI/UX Enthusiast"];
  let i = 0, j = 0, currentPhrase = [], isDeleting = false;

  function loop() {
    typedText.innerHTML = currentPhrase.join("");

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }

    const typingSpeed = isDeleting ? 80 : 120;
    setTimeout(loop, typingSpeed);
  }

  loop();
});

// Formspree submission - JS interception removed);
}
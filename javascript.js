function generateCaptcha() {
  const code = Math.floor(1000 + Math.random() * 9000);
  const captchaBox = document.getElementById("captchaBox");
  if (captchaBox) {
    captchaBox.innerText = code;
  }
}

window.onload = generateCaptcha;

document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const toggle = question.querySelector('.faq-toggle');
    const isVisible = answer.style.display === 'block';

    document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
    document.querySelectorAll('.faq-toggle').forEach(t => t.textContent = '+');

    if (!isVisible) {
      answer.style.display = 'block';
      toggle.textContent = '–';
    }
  });
});

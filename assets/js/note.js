document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const toggle = item.querySelector('.faq-toggle');

    question.addEventListener('click', () => {
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-toggle').textContent = '+';
        }
      });

      item.classList.toggle('active');

      if (item.classList.contains('active')) {
        toggle.textContent = '×';
      } else {
        toggle.textContent = '+';
      }
    });
  });
});

/* slide */
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;
  const intervalTime = 3000;
  function switchSlides() {
      slides[currentIndex].classList.remove('active');  
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
  }
  let slideInterval = setInterval(switchSlides, intervalTime);
  const sliderContainer = document.querySelector('.about_right');
  sliderContainer.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
  });
  sliderContainer.addEventListener('mouseleave', () => {
      slideInterval = setInterval(switchSlides, intervalTime);
  });
});
/* slide */

document.addEventListener('DOMContentLoaded', function() {
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
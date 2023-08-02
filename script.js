const faqItem = document.querySelectorAll('.faq-item');
faqItem.forEach(item => {
    const question = item.querySelector('h3');
    question.addEventListener('click', () => {
       item.classList.toggle('active');
    });
});
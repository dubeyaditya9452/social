const faqItem = document.querySelectorAll('.faq-item');
faqItem.forEach(item => {
    const question = item.querySelector('h3');
    question.addEventListener('click', () => {
       item.classList.toggle('active');
    });
});


function scrollToTop(){
    window.scrollTo({
     top:0,
     behavior:"smooth"
    });
}

window.onscroll = function() {
    var scrollToTopBtn = document.querySelector(".scroll-to-top-btn");
    if (window.scrollY >= 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };  
  
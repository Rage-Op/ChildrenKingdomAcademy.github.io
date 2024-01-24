console.log('script.js loaded');

// Get all question divs 
const qnDivs = document.querySelectorAll('.qn-ans-div');

qnDivs.forEach(function(div) {

  div.addEventListener('click', function() {
    
    // Get id of clicked div
    const id = this.id;
    
    // Get answer div
    const ansDiv = document.getElementById(`ans${id.slice(-1)}`);

    // Toggle show class
    ansDiv.classList.toggle('show');

  });

});


// Back to top button
const backToTop = document.querySelector('.back-to-top');

backToTop.style.transform = 'translateY(100vh)'; 

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    backToTop.style.transform = 'translateY(0)';
  } else {
    backToTop.style.transform = 'translateY(100vh)';
  }
})
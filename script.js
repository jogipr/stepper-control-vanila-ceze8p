const circles = document.querySelectorAll('.circle');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const progressActive = document.querySelector('.progress-active');

let activeStep = 1;

prevButton.addEventListener('click', () => {
  activeStep--;

  if (activeStep < 1) {
    activeStep = 1;
  }
  updateDom();
});

nextButton.addEventListener('click', () => {
  activeStep++;
  if (activeStep > circles.length) {
    activeStep = circles.length;
  }
  updateDom();
});

const updateDom = () => {
  circles.forEach((circle, idx) => {
    if (activeStep > idx) {
      circle.classList.add('circle-active');
    } else {
      circle.classList.remove('circle-active');
    }
  });
  const activeCircles = document.querySelectorAll('.circle-active');
  const wi = `${((activeCircles.length - 1) / (circles.length - 1)) * 100}%`;
  progressActive.style.width = wi;
};

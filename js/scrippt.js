document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.slide-img li');
    let currentIndex = 0;
  
    const changeImage = () => {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    };
  
    changeImage();
    setInterval(changeImage, 5000);
  });
  
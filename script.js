let index = 0;
const images = document.querySelectorAll('.carousel-img');
const totalImages = images.length;

document.querySelector('.next').addEventListener('click', () => {
    images[index].classList.remove('active');
    index = (index + 1) % totalImages;
    images[index].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
    images[index].classList.remove('active');
    index = (index - 1 + totalImages) % totalImages;
    images[index].classList.add('active');
});

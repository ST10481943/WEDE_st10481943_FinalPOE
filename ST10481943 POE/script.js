
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');


galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const imgSrc = img.src; 
    lightboxImg.src = imgSrc; 
    lightbox.style.display = 'flex'; 
  });
});


function closeLightbox() {
  lightbox.style.display = 'none'; 
}


lightbox.addEventListener('click', function(event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

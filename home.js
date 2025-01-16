const photoContainer = document.getElementById('photoContainer');

function scrollLeft() {
    photoContainer.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollRight() {
    photoContainer.scrollBy({ left: 200, behavior: 'smooth' });
}
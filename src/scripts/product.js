 document.querySelectorAll('.side-img img').forEach(item => {
     item.addEventListener('click', function() {
        changeImage(this.src);
    });
});

function changeImage(src) {
    document.querySelector('.carrousel-img img').src = src;
}

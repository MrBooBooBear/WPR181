// Fourie's work starts here
window.addEventListener('load', function() {
    this.sessionStorage.removeItem('popupShown');
})
window.addEventListener('scroll',function() {
    if (!this.sessionStorage.getItem('popupShown')) {
        var popupId = this.document.querySelector('.popup').id;
        if (this.window.scrollY > 350) {
            this.document.getElementById(popupId).style.display = 'flex';
            this.document.body.classList.add('noScroll');
            this.sessionStorage.setItem('popupShown', popupId);
        }
    }
})
document.querySelectorAll('.close').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        var popupId = this.getAttribute('data-popup');
        var popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'none';
            document.body.classList.remove('noScroll');
        }
    });
})
// Fourie's work ends here
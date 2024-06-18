document.addEventListener('DOMContentLoaded', function() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
        const parentLi = popup.parentNode;
        let timeoutId;
        parentLi.addEventListener('mouseenter', function() {
            clearTimeout(timeoutId);
            popup.style.display = 'block';
        });
        parentLi.addEventListener('mouseleave', function() {
            timeoutId = setTimeout(function() {
                popup.style.display = 'none';
            }, 200);
        });
    });
});
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function onScroll() {
    const textElement = document.querySelector('.text');
    if (isInViewport(textElement)) {
        textElement.classList.add('visible');
    }
}

window.addEventListener('scroll', onScroll);

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

document.querySelectorAll('.link-to-page').forEach(link => {
    link.addEventListener('click', function(event) {
        const image = this.querySelector('img');
        image.classList.add('fade-effect');
        event.preventDefault(); // Prevent the default link click action

        setTimeout(() => {
            window.location.href = this.href; // Navigate to the link's href attribute
        }, 1000); // Match this duration with the CSS transition duration
    });
});
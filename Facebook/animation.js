document.addEventListener('DOMContentLoaded', function() {
    var summarizeText = document.getElementById('scrollText');
    var startedScrolling = false;

    window.addEventListener('scroll', function() {
        if (!startedScrolling) {
            // Only trigger when the user starts scrolling
            summarizeText.classList.add('scrolling');  // Add a class to trigger the animation
            startedScrolling = true;
        }

        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Adjust the position of the text to move up as the user scrolls
        summarizeText.style.transform = 'translateY(' + (scrollPosition * 0.3) + 'px)';
    });
});

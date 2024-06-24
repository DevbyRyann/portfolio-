document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var progressBars = document.querySelectorAll('.progress-bar-liquid');
    progressBars.forEach(function(bar) {
        let value = bar.getAttribute('data-value');
        bar.style.setProperty('--bar-width', value + '%');
    });
});

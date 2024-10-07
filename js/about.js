<!-- JavaScript untuk animasi scroll -->
        window.addEventListener('scroll', function() {
            const elements = document.querySelectorAll('.about-content');
            elements.forEach(element => {
                const position = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;

                if (position < screenPosition) {
                    element.classList.add('fade-in');
                }
            });
        });

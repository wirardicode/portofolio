// Lightbox functionality for certificates
        const certificateCards = document.querySelectorAll('.certificate-card');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const closeLightbox = document.getElementById('closeLightbox');

        certificateCards.forEach(card => {
            card.addEventListener('click', function () {
                const img = this.querySelector('img');
                if (img && img.src) {
                    lightboxImg.src = img.src;
                    lightbox.classList.remove('hidden');
                    lightbox.classList.add('flex');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        closeLightbox.addEventListener('click', function () {
            lightbox.classList.add('hidden');
            lightbox.classList.remove('flex');
            document.body.style.overflow = 'auto';
        });

        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                lightbox.classList.add('hidden');
                lightbox.classList.remove('flex');
                document.body.style.overflow = 'auto';
            }
        });

        // Close lightbox with ESC key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
                lightbox.classList.add('hidden');
                lightbox.classList.remove('flex');
                document.body.style.overflow = 'auto';
            }
        });
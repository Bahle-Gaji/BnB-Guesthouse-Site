function scrollCarousel(direction) {
            const container = document.getElementById('carousel');
            const scrollAmount = 150; // Adjust based on item width + gap
            container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
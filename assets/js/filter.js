document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('guide-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const guideCards = document.querySelectorAll('.guide-card');

    function filterGuides() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

        guideCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const category = card.dataset.category;
            const filterTags = card.dataset.filterTags ? card.dataset.filterTags.split(' ') : [];

            const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);

            let matchesFilter = false;
            if (activeFilter === 'all') {
                matchesFilter = true;
            } else if (category === activeFilter) {
                matchesFilter = true;
            } else if (filterTags.includes(activeFilter)) {
                matchesFilter = true;
            }

            if (matchesSearch && matchesFilter) {
                card.style.display = 'flex';
                card.classList.remove('hidden');
            } else {
                card.style.display = 'none';
                card.classList.add('hidden');
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterGuides);
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterGuides();
        });
    });
});

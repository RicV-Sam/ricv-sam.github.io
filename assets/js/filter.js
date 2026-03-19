document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('guide-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const guideCards = document.querySelectorAll('.guide-card');

    function filterGuides() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        let visibleCount = 0;

        // Find the grid associated with the current section to handle multiple grids if they exist
        const section = searchInput.closest('section');
        const grid = section ? section.querySelector('.guides-grid') : null;

        if (!grid) return;

        const cards = grid.querySelectorAll('.guide-card');

        cards.forEach(card => {
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
                visibleCount++;
            } else {
                card.style.display = 'none';
                card.classList.add('hidden');
            }
        });

        updateNoResultsMessage(grid, visibleCount);
    }

    function updateNoResultsMessage(container, count) {
        let messageElement = container.querySelector('.no-results');

        if (count === 0) {
            if (!messageElement) {
                messageElement = document.createElement('div');
                messageElement.className = 'no-results';
                messageElement.setAttribute('role', 'alert');
                messageElement.innerHTML = `
                    <span class="no-results-icon" aria-hidden="true">🔍</span>
                    <p>No guides found matching your criteria.</p>
                    <p style="font-size: 0.9em; margin-top: 8px; font-weight: 400;">Try adjusting your search or filters.</p>
                `;
                container.appendChild(messageElement);
            }
        } else if (messageElement) {
            messageElement.remove();
        }
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

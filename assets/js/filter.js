document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('guide-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const guideCards = document.querySelectorAll('.guide-card');

    function filterGuides() {
        const searchTerm = searchInput.value.toLowerCase();
        const section = searchInput.closest('section');
        if (!section) return;

        // Get all active filters within the current section (intersection)
        const activeFilters = Array.from(section.querySelectorAll('.filter-btn.active'))
            .map(btn => btn.dataset.filter);

        let visibleCount = 0;
        const grid = section.querySelector('.guides-grid');
        if (!grid) return;

        const cards = grid.querySelectorAll('.guide-card');

        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const category = card.dataset.category;
            const filterTags = card.dataset.filterTags ? card.dataset.filterTags.split(' ') : [];

            const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);

            const matchesFilters = activeFilters.every(filter => {
                if (filter === 'all') return true;
                return category === filter || filterTags.includes(filter);
            });

            if (matchesSearch && matchesFilters) {
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
                    <span class="no-results-tip">Try adjusting your search or filters.</span>
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
            // Scope activation to the same tablist to support independent filter categories
            const tabList = button.closest('[role="tablist"]');
            const relatedButtons = tabList ? tabList.querySelectorAll('.filter-btn') : [button];

            relatedButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });

            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            filterGuides();
        });
    });

    // Support keyboard navigation (Arrow Keys) for tablists
    document.querySelectorAll('[role="tablist"]').forEach(tabList => {
        tabList.addEventListener('keydown', (e) => {
            const buttons = Array.from(tabList.querySelectorAll('.filter-btn'));
            const currentIndex = buttons.indexOf(document.activeElement);
            if (currentIndex === -1) return;

            let nextIndex;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                nextIndex = (currentIndex + 1) % buttons.length;
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
            } else if (e.key === 'Home') {
                nextIndex = 0;
            } else if (e.key === 'End') {
                nextIndex = buttons.length - 1;
            } else {
                return;
            }

            e.preventDefault();
            buttons[nextIndex].focus();
        });
    });
});

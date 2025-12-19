document.addEventListener('DOMContentLoaded', () => {
    const categoriesToggle = document.querySelector('.categories-toggle');
    const categoriesDropdown = document.getElementById('categories-dropdown');
    const categoryItems = document.querySelectorAll('.category-item');

    // Toggle dropdown on button click
    categoriesToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = categoriesToggle.getAttribute('aria-expanded') === 'true';
        categoriesToggle.setAttribute('aria-expanded', !isExpanded);
        categoriesDropdown.style.display = isExpanded ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!categoriesToggle.contains(e.target) && !categoriesDropdown.contains(e.target)) {
            categoriesToggle.setAttribute('aria-expanded', 'false');
            categoriesDropdown.style.display = 'none';
        }
    });

    // Handle category selection
    categoryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const category = item.getAttribute('data-category');
            
            // Update active state
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            // Update button text
            categoriesToggle.querySelector('span').textContent = item.textContent;
            
            // Close dropdown
            categoriesToggle.setAttribute('aria-expanded', 'false');
            categoriesDropdown.style.display = 'none';
            
            // Here you would typically filter products by category
            console.log(`Selected category: ${category}`);
            // filterProductsByCategory(category);
        });
    });

    // Handle keyboard navigation
    categoriesDropdown.addEventListener('keydown', (e) => {
        const items = Array.from(categoryItems);
        const currentIndex = items.findIndex(item => item === document.activeElement);
        
        if (e.key === 'Escape') {
            categoriesToggle.focus();
            categoriesToggle.setAttribute('aria-expanded', 'false');
            categoriesDropdown.style.display = 'none';
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
            items[nextIndex].focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
            items[prevIndex].focus();
        } else if (e.key === 'Home') {
            e.preventDefault();
            items[0].focus();
        } else if (e.key === 'End') {
            e.preventDefault();
            items[items.length - 1].focus();
        }
    });
});

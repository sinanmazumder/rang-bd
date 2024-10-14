
// location


document.addEventListener('DOMContentLoaded', () => {
    let searchInput = document.querySelector('.search-input-3');
    let dropdown = document.querySelector('.dropdownn-3');
    let suggestions = Array.from(document.querySelectorAll('.dropdownn-3 .suggestion-2'));

    const updateDropdown = () => {
        const input = searchInput.value.toLowerCase();

        suggestions.forEach(suggestion => {
            if (suggestion.textContent.toLowerCase().includes(input)) {
                suggestion.style.display = 'grid';
            } else {
                suggestion.style.display = 'none';
            }
        });

        const hasVisibleSuggestions = suggestions.some(suggestion => suggestion.style.display === 'block');
        dropdown.style.display = hasVisibleSuggestions ? 'grid' : 'none';
    };

    searchInput.addEventListener('input', updateDropdown);

    searchInput.addEventListener('focus', () => {
        suggestions.forEach(suggestion => {
            suggestion.style.display = 'grid';
        });
        dropdown.style.display = 'grid';
    });

    document.addEventListener('click', (event) => {
        if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });

    suggestions.forEach(suggestion => {
        suggestion.addEventListener('click', () => {
            searchInput.value = suggestion.textContent;
            dropdown.style.display = 'none';
        });
    });
});

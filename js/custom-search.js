// custom search



document.addEventListener('DOMContentLoaded', () => {
    let searchInput = document.querySelector('.search-input-2');
    let dropdown = document.querySelector('.dropdownn-2');
    let suggestions = Array.from(document.querySelectorAll('.dropdownn-2 .suggestion'));

    const updateDropdown = () => {
        const input = searchInput.value.toLowerCase();

        suggestions.forEach(suggestion => {
            if (suggestion.textContent.toLowerCase().includes(input)) {
                suggestion.style.display = 'block';
            } else {
                suggestion.style.display = 'none';
            }
        });

        const hasVisibleSuggestions = suggestions.some(suggestion => suggestion.style.display === 'block');
        dropdown.style.display = hasVisibleSuggestions ? 'block' : 'none';
    };

    searchInput.addEventListener('input', updateDropdown);

    searchInput.addEventListener('focus', () => {
        suggestions.forEach(suggestion => {
            suggestion.style.display = 'block';
        });
        dropdown.style.display = 'block';
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

import reddit from './redditapi';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Form Event Listener
searchForm.addEventListener('submit', e => {
    e.preventDefault();

    // get search term
    const searchTerm = searchInput.value;
    // get sort
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    // get limit
    const searchLimit = document.getElementById('limit').value;
    
    // check input
    if(searchTerm === '') {
        // show a message
        showMessage('Please add a search term', 'alert-danger');
    }

    // clear input
    searchInput.value = '';

    // search Reddit
    reddit.search(searchTerm, searchLimit, sortBy);
});

// show message
function showMessage(message, className) {
    // create div
    const div = document.createElement('div');
    // add classes
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parent container
    const searchContainer = document.getElementById('search-container');
    // get search
    const search = document.getElementById('search');

    // insert message
    searchContainer.insertBefore(div, search);

    // timeout alert
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}
const toggleSuggestionsButton = document.querySelector(
  '.toggleSuggestionsButton'
);
const suggestionsList = document.querySelector('.suggestionsList');

toggleSuggestionsButton.addEventListener('click', () => {
  if (!suggestionsList.classList.contains('active')) {
    suggestionsList.classList.add('active');
  } else {
    suggestionsList.classList.remove('active');
  }
});

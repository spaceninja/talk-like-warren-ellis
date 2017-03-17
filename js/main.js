/* global loadData, talkLikeWarrenEllis */
loadData('data/vocabulary.json', function(vocabulary) {
    document.getElementById('quote').innerHTML = talkLikeWarrenEllis(vocabulary);
});

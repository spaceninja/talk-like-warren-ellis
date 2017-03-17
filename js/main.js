/* global loadData, talkLikeWarrenEllis */

loadData('data/vocabulary.json', function(vocabulary) {
    console.log(vocabulary);
    document.getElementById('quote').innerHTML = talkLikeWarrenEllis(vocabulary);
});

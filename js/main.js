/* global loadData, talkLikeWarrenEllis */

var vocabulary = loadData('data/vocabulary.json');
document.getElementById('quote').innerHTML = talkLikeWarrenEllis(vocabulary);

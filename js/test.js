/* global loadData, talkLikeWarrenEllis */
loadData('/data/vocabulary.json', function(vocabulary) {
    var content = "";

    for (var i = 100 - 1; i >= 0; i--) {
        content += '<li>' + talkLikeWarrenEllis(vocabulary) + '</li>';
    }

    document.getElementById('test-array').innerHTML = content;
});

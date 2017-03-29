/* global loadData, talkLikeWarrenEllis */
loadData('data/vocabulary.json', function(vocabulary) {
    var ellisism = talkLikeWarrenEllis(vocabulary);
    var encEllisism = encodeURIComponent(ellisism);
    var encUrl = encodeURIComponent('http://talklikewarrenellis.com');

    var tweet = 'https://twitter.com/intent/tweet' +
            '?text=' + encEllisism +
            '&url=' + encUrl;

    var share = 'https://www.facebook.com/sharer/sharer.php' +
            '?quote=' + encEllisism +
            '&u=' + encUrl +
            '&display=popup';

    document.getElementById('quote').innerHTML = ellisism;
    document.getElementById('twitter').setAttribute('href', tweet);
    document.getElementById('facebook').setAttribute('href', share);
});

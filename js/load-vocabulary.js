var loadData = function(url) {

    // Standard XHR to load data from a URL
    var request = new XMLHttpRequest();
    request.open('GET', url);

    // When the request loads, check whether it was successful
    request.onload = function() {

        // We got a successful response from the server
        if (request.status >= 200 && request.status < 400) {
            console.log('Data loaded successfully; server code: ' + request.status);
            var vocabulary = JSON.parse(request.responseText);
            console.log(vocabulary);
            return vocabulary;

        // We got an error code from the server
        } else {
            console.log('Data did not load successfully; error code: ' + request.status);
            return false;
        }
    };

    // Handle an Ajax connection error
    request.onerror = function() {
        console.log('There was a network error.');
        return false;
    };

    // Send the request
    request.send();
};

/* global _ */
var content = "";
var error = "";
var xhr = new XMLHttpRequest();

// construct a quote
var buildQuote = function(vocabulary) {
    content += _.sample(vocabulary.salutation) + ' ';
    content += _.sample(vocabulary.bastards) + ' of the ';
    content += _.sample(vocabulary.internet) + '.';
};

// Prepare the Ajax request
xhr.open('GET', 'data/vocabulary.json', true);

// Handle the Ajax response
xhr.onload = function() {

    // We got a good response from the server
    if (xhr.status >= 200 && xhr.status < 400) {

        // Parse the JSON data
        var vocabulary = JSON.parse(xhr.responseText);

        // Run the quote function
        buildQuote(vocabulary);

        // Write the quote to the browser
        document.getElementById('quote').innerHTML = content;

    // We reached our target server, but it returned an error
    } else {
        error = 'Whoops! Something went wrong. Please try again.';
        document.getElementById('datelist-error').innerHTML = error;
    }
};

// Handle an Ajax connection error
xhr.onerror = function() {
    error = 'Whoops! We couldn\'t reach the server. Please try again.';
    document.getElementById('datelist-error').innerHTML = error;
};

// Send the Ajax request
xhr.send();

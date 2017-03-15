/* global _ */
var xhr = new XMLHttpRequest();

//
// Depluralize words that end in "s"
//
var singularize = function(word) {
    word = word.trim();
    if (word.substr(-1) === 's') {
        return word.slice(0, -1);
    } else {
        return word;
    }
};

//
// Things Warren Ellis Calls "My Little X"
//
var ellisMyLittleLabel = function(vocabulary) {
    var label = 'my ';
    switch (_.random(4)) {

        case 0:
            // eg, "my sexy mammals of the internet"
            label += _.sample(vocabulary.sexy) + ' ';
            label += _.sample(vocabulary.mammals) + ' of ';
            if (_.random(1, 100) < 50) {
                label += _.sample(vocabulary.sexiness) + '.';
            } else {
                label += 'the ' + _.sample(vocabulary.internet) + '.';
            }
            break;

        case 1:
            // eg, "my little sex monsters"
            label += 'little ';
            label += _.sample(vocabulary.sex) + ' ';
            label += _.sample(vocabulary.monsters) + '.';
            break;

        case 2:
            // eg, "my little mammals of doom"
            label += 'little ';
            label += _.sample(vocabulary.mammals) + ' of ';
            switch (_.random(2)) {
                case 0:
                    label += _.sample(vocabulary.sexiness) + '.';
                    break;
                case 1:
                    label += _.sample(vocabulary.ill_omen) + '.';
                    break;
                default:
                    label += 'the ' + _.sample(vocabulary.internet) + '.';
            }
            break;

        case 3:
            // eg, "my little sex mammals of doom"
            label += 'little ';
            label += _.sample(vocabulary.sex) + ' ';
            label += _.sample(vocabulary.mammals) + ' of ';
            if (_.random(1, 100) < 50) {
                label += _.sample(vocabulary.ill_omen) + '.';
            } else {
                label += 'the ' + _.sample(vocabulary.internet) + '.';
            }
            break;

        default:
            // eg, "my moist sex mammals"
            label += _.sample(vocabulary.moist) + ' ';
            label += _.sample(vocabulary.sex) + ' ';
            label += _.sample(vocabulary.mammals) + '.';
    }
    return label;
};

//
// Things Warren Ellis Calls You
//
var ellisLabel = function(vocabulary) {
    var label = '';
    switch (_.random(7)) {

        case 0:
            // eg, "My little sex monsters"
            label += ellisMyLittleLabel(vocabulary);
            break;

        case 1:
            // eg, "horrible glowing scum"
            if (_.random(1, 100) < 50) {
                label += _.sample(vocabulary.filthy) + ' ';
            } else {
                label += _.sample(vocabulary.sublime) + ' ';
            }
            label += _.sample(vocabulary.scum) + '.';
            break;

        case 2:
            // eg, "bastards of the internet"
            label += _.sample(vocabulary.bastards) + ' of the ';
            label += _.sample(vocabulary.internet) + '.';
            break;

        case 3:
            // eg, "sexy beasts of the apocalypse"
            if (_.random(1, 100) < 50) {
                label += _.sample(vocabulary.sexy) + ' ';
            }
            label += _.sample(vocabulary.beasts) + ' of ';
            label += _.sample(vocabulary.ill_omen) + '.';
            break;

        case 4:
            // eg, "internet scum horde"
            label += _.sample(vocabulary.internet) + ' ';
            label += singularize(_.sample(vocabulary.scum)) + ' ';
            if (_.random(1, 100) < 50) {
                label += _.sample(vocabulary.horde) + '.';
            } else {
                label += 'of ' + _.sample(vocabulary.sexiness) + '.';
            }
            break;

        case 5:
            // eg, "walking slabs of haunted pork"
            label += _.sample(vocabulary.arbitrary_gnarbags) + '.';
            break;

        case 6:
            // eg, "filthy sex polyps"
            label += _.sample(vocabulary.filthy) + ' ';
            label += _.sample(vocabulary.sex) + ' ';
            label += _.sample(vocabulary.body_parts) + '.';
            break;

        default:
            // eg, "you glowing sex animals of the internet"
            label += 'you ' + _.sample(vocabulary.sublime) + ' ';
            label += _.sample(vocabulary.sex) + ' ';
            if (_.random(1, 100) < 50) {
                label += _.sample(vocabulary.mammals);
            } else {
                label += _.sample(vocabulary.beasts);
            }
            if (_.random(1, 100) < 25) {
                label += ' of the ' + _.sample(vocabulary.internet) + '.';
            } else {
                label += '.';
            }
    }
    return label;
};

//
// Good Morning Scum
//
// Produces a quote like: "Good Morning, Bastards of the Internet"
//
var goodMorningScum = function(vocabulary) {
    var greeting = '';

    // eg, Good Morning
    greeting += _.sample(vocabulary.salutation) + ' ';

    // eg, "bastards of the internet"
    greeting += ellisLabel(vocabulary);

    if (_.random(1, 100) < 10) {
        // eg, "I hate you"
        greeting += ' ' + _.sample(vocabulary.extra);
    }

    return greeting;
};

//
// Attention Scum
//
// Produces a quote like "ATTENTION SCUM: I will destroy you"
//
var attentionScum = function(vocabulary) {
    var greeting = '';

    if (_.random(1, 100) < 50) {
        // eg, "ATTENTION SCUM"
        greeting += _.sample(vocabulary.attention) + ' ';

    } else {
        // eg, "ATTENTION $FILTH" with a random filth name
        greeting += "attention ";
        greeting += _.sample(vocabulary.attentive_filth) + ': ';
    }

    // uppercase the "ATTENTION SCUM" part
    greeting = greeting.toUpperCase();

    // eg, "I hate you"
    greeting += _.sample(vocabulary.extra);

    return greeting;
};

//
// Build a Quote
//
// This is our final function. It chooses between two paths:
// 1. 85% chance to call goodMorningScum(), and an
//    addtional 10% chance to append an extra bit at the end.
// 2. 15% chance to call attentionScum()
//
var buildQuote = function(vocabulary) {
    var quote = '';

    if (_.random(1, 100) < 85) {
        // eg, "Good Morning, Scum"
        quote = goodMorningScum(vocabulary);

    } else {
        // eg, "ATTENTION SCUM: I hate you"
        quote = attentionScum(vocabulary);
    }

    return quote;
};

// Prepare the Ajax request
xhr.open('GET', 'data/vocabulary.json', true);

// Handle the Ajax response
xhr.onload = function() {

    // We got a good response from the server
    if (xhr.status >= 200 && xhr.status < 400) {

        // Parse the JSON data
        var vocabulary = JSON.parse(xhr.responseText);
        document.getElementById('quote').innerHTML = buildQuote(vocabulary);

    // We reached our target server, but it returned an error
    } else {
        var error = 'Whoops! Something went wrong. Please try again.';
        document.getElementById('datelist-error').innerHTML = error;
    }
};

// Handle an Ajax connection error
xhr.onerror = function() {
    var error = 'Whoops! We couldn\'t reach the server. Please try again.';
    document.getElementById('datelist-error').innerHTML = error;
};

// Send the Ajax request
xhr.send();

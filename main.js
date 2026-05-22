// Talk Like Warren Ellis — generates a Warren Ellis-like greeting.

// Word lists (formerly data/vocabulary.json).
const VOCABULARY = {
  "sexy": ["concupiscent", "sexy", "sleek", "pretty", "ambulatory", "orgasm", "hopping", "purple", "oiled", "yummy", "bed", "pubic", "lovely", "beautiful", "motile", "perfumed", "lickable"],

  "filthy": ["weevil-ridden", "weekend", "internet", "filthy", "horrendous", "creepy", "hideous", "fucking", "terrible", "horrible", "corrupting", "ugly", "frightening", "heartless", "deathwatch", "doomed", "burning", "foul", "strange", "sinister"],

  "sublime": ["beautiful and terrifying", "flourescent", "exploding", "post-singularity", "disturbing", "evil", "electrical", "fiery", "galloping", "petrochemical", "spectral", "space", "great and shimmying", "wheel-eyed", "glowing", "joy"],

  "moist": ["sweaty", "greasy", "slimy", "oozing", "heaving", "spurting", "horrendous", "meat-based", "greased", "turgid", "frozen", "pleasure", "suppurating", "fragrant", "lubricated", "nipply", "undulating", "hairy", "scrotal", "lubricious"],

  "sex": ["sex", "love", "orgasm", "porn", "pheremone", "sin", "slut", "bed", "death"],

  "body_parts": ["pustules", "polyps", "lesions", "intestines", "teats", "nodules", "skin", "nipples", "treats", "estrus bumps", "fleshsocks", "bones", "fistulas", "discharges", "leakages", "plague buboes", "tumours", "erectile tissues", "tentacles", "jewels", "warts", "pedipalps"],

  "beasts": ["crows", "wolves", "buzzards", "cobras", "sharks", "piranha", "lungfish", "beasts", "lizards", "iguanas", "toads", "octopi", "squid", "piranhas", "urchins", "manatees"],

  "mammals": ["ducklings", "ocelots", "antelopes", "chupacabras", "goats", "monkeys", "apes", "bonobos", "chimpanzees", "macaques", "otters", "wildebeest", "stoats", "weasels", "fruitbats", "lepers", "midgets", "lemmings", "ferrets", "marmosets", "badgers", "panthers", "dogs", "pigs", "voles", "meerkats", "fruitbats"],

  "monsters": ["ducklings", "maggots", "phasmids", "mantises", "spiders", "fungi", "dermestid beetles", "vampires", "ammonites", "maggots", "death spores", "strangelets", "shitbeetles", "plague flies", "freaks of nature", "monsters", "ghosts", "machines", "leeches", "beetles", "ghostlings", "lice", "spores", "dreamgoats", "mugwumps", "tardigrades", "plaguebabies"],

  "attentive_filth": ["scum", "filth", "sinners", "pariahs", "fuckwads", "meatbags", "filthy animals"],

  "scum": ["scum", "shitbeetles", "shitbirds", "ordinary humans", "perverts", "meat", "monkey people", "scumbundles", "scumbubbles", "horrorbags", "horrormonkeys", "fuckoids", "freakazoids", "freakshow", "skin things", "animals", "filth", "spooklettes", "fuckbags", "freakpeople", "breathing machines", "bags of horror", "haunted beef", "fuckweasels", "victims", "shitfountains", "fuckmuppets", "fluffers", "spooklings", "arseleeches", "sexbeasts", "bloodbags", "horrorpops", "shagmuffins", "skinmachines", "catnipples", "meatsprites", "skinsacks", "skulltrolls", "godnipples", "marionettes", "bone machines", "lovebeasts", "fuckspores", "nipplybeasts", "sexbuckets", "scumshine", "weirdoids", "weirdlettes", "skinbeasts", "heartbubbles", "toxins", "strange matter", "futurenauts", "skinbags", "internauts", "lovespawn", "crotchbears", "skin monsters", "soulworms", "sparklewarts", "brothelkittens", "deathsperms", "salt licks", "crotchbeetles", "nipplewarmers", "bedpigs"],

  "bastards": ["pervert people", "holy fools", "deathmonkeys", "goatfelchers", "whores", "space whores", "Mongols", "sex criminals", "freaks", "monkeyshaggers", "bastards", "doomed fools", "thought criminals", "munchkins", "face criminals", "dwarves", "frotteurs"],

  "horde": ["horde", "hordes", "armada", "swarm", "twitterhorde", "freakscene", "herd", "pervherd"],

  "sexiness": ["frottage", "concupiscence", "love", "self-pollution", "desire", "intrusion", "sexcrime", "deliciousness", "delight", "turgidity", "romance", "amour", "joy", "lubriciousness", "engorgement", "surprise", "the boudoir", "abandon"],

  "ill_omen": ["impending doom", "the apocalypse", "contagion", "the internet", "intervention", "damnation", "death"],

  "internet": ["internet", "twitternet", "intertube", "interweb", "noosphere"],

  "arbitrary_gnarbags": ["stains on the escutcheon of humanity itself", "dermestid beetles on the flesh of the internet", "horsepersons of the apocalypse", "living towers of burning murderous leipajuusto", "vectors of contagion", "vials of panther sweat", "walking slabs of haunted pork", "mind gangsters", "arsebiscuits", "cockblisters deluxe", "angels of the abyss", "scrotal treasures", "frightening skin machines", "love swamis", "crackling virility hedges", "tops and bottoms", "cloud of death spores", "splodges of monkey custard", "dollops of monkey custard", "bundles of muck", "brimming receptacles of deviljuice", "tiger blood clots"],

  "extra": ["nnaaaaarg fuck cough spit twitch jerk", "I'm off to the pub.", "I WILL FUCKING CUT YOU", "BABY HEADS SPANNERS PLAGUE COCKS", "You may amuse me now.", "I BLEED RED BULL", "I hate you with the fire of ten suns.", "Damn you all. (waves cane menacingly) (coughs consumptively)", "You may tell me that you love me now.", "hahaha suffer", "Everyone take their clothes off now.", "I spat in that last drink I bought you.", "Sit in my lap and tell me you're sorry.", "fuck you i am batman", "You will all pay.", "I blame YOU.", "jesus christ mutter fuck", "OH SHIT HERE COMES PROFESSOR DRINKY", "show me your pedipalps"],

  "salutation": ["Good morning,", "Good evening,", "Good night,", "Good day,", "Good afternoon,"],

  "attention": ["Attention scum:", "Attention sinners:"]
};

//
// Helpers (replace Underscore's _.random / _.sample and pluralize.singular).
//

// Random element from an array.
var sample = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

// Inclusive random integer: random(7) => 0..7, random(1, 100) => 1..100.
var random = function(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
};

// Crude singularizer — used once, on a "scum" word. Strips a trailing "s".
var singularize = function(word) {
    return word.replace(/ies$/, 'y').replace(/([^s])s$/, '$1');
};

//
// Things Warren Ellis Calls "My Little X"
//
var ellisMyLittleLabel = function(vocabulary) {
    var label = 'my ';
    switch (random(4)) {

        case 0:
            // eg, "my sexy mammals of the internet"
            label += sample(vocabulary.sexy) + ' ';
            label += sample(vocabulary.mammals) + ' of ';
            if (random(1, 100) <= 50) {
                label += sample(vocabulary.sexiness) + '.';
            } else {
                label += 'the ' + sample(vocabulary.internet) + '.';
            }
            break;

        case 1:
            // eg, "my little sex monsters"
            label += 'little ';
            label += sample(vocabulary.sex) + ' ';
            label += sample(vocabulary.monsters) + '.';
            break;

        case 2:
            // eg, "my little mammals of doom"
            label += 'little ';
            label += sample(vocabulary.mammals) + ' of ';
            switch (random(2)) {
                case 0:
                    label += sample(vocabulary.sexiness) + '.';
                    break;
                case 1:
                    label += sample(vocabulary.ill_omen) + '.';
                    break;
                default:
                    label += 'the ' + sample(vocabulary.internet) + '.';
            }
            break;

        case 3:
            // eg, "my little sex mammals of doom"
            label += 'little ';
            label += sample(vocabulary.sex) + ' ';
            label += sample(vocabulary.mammals) + ' of ';
            if (random(1, 100) <= 50) {
                label += sample(vocabulary.ill_omen) + '.';
            } else {
                label += 'the ' + sample(vocabulary.internet) + '.';
            }
            break;

        default:
            // eg, "my moist sex mammals"
            label += sample(vocabulary.moist) + ' ';
            label += sample(vocabulary.sex) + ' ';
            label += sample(vocabulary.mammals) + '.';
    }
    return label;
};

//
// Things Warren Ellis Calls You
//
var ellisLabel = function(vocabulary) {
    var label = '';
    switch (random(7)) {

        case 0:
            // eg, "My little sex monsters"
            label += ellisMyLittleLabel(vocabulary);
            break;

        case 1:
            // eg, "horrible glowing scum"
            if (random(1, 100) <= 50) {
                label += sample(vocabulary.filthy) + ' ';
            } else {
                label += sample(vocabulary.sublime) + ' ';
            }
            label += sample(vocabulary.scum) + '.';
            break;

        case 2:
            // eg, "bastards of the internet"
            label += sample(vocabulary.bastards) + ' of the ';
            label += sample(vocabulary.internet) + '.';
            break;

        case 3:
            // eg, "sexy beasts of the apocalypse"
            if (random(1, 100) <= 50) {
                label += sample(vocabulary.sexy) + ' ';
            }
            label += sample(vocabulary.beasts) + ' of ';
            label += sample(vocabulary.ill_omen) + '.';
            break;

        case 4:
            // eg, "internet scum horde"
            label += sample(vocabulary.internet) + ' ';
            label += singularize(sample(vocabulary.scum)) + ' ';
            if (random(1, 100) <= 50) {
                label += sample(vocabulary.horde) + '.';
            } else {
                label += 'of ' + sample(vocabulary.sexiness) + '.';
            }
            break;

        case 5:
            // eg, "walking slabs of haunted pork"
            label += sample(vocabulary.arbitrary_gnarbags) + '.';
            break;

        case 6:
            // eg, "filthy sex polyps"
            label += sample(vocabulary.filthy) + ' ';
            label += sample(vocabulary.sex) + ' ';
            label += sample(vocabulary.body_parts) + '.';
            break;

        default:
            // eg, "you glowing sex animals of the internet"
            label += 'you ' + sample(vocabulary.sublime) + ' ';
            label += sample(vocabulary.sex) + ' ';
            if (random(1, 100) <= 50) {
                label += sample(vocabulary.mammals);
            } else {
                label += sample(vocabulary.beasts);
            }
            if (random(1, 100) <= 25) {
                label += ' of the ' + sample(vocabulary.internet) + '.';
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
    greeting += sample(vocabulary.salutation) + ' ';

    // eg, "bastards of the internet"
    greeting += ellisLabel(vocabulary);

    if (random(1, 100) <= 10) {
        // eg, "I hate you"
        greeting += ' ' + sample(vocabulary.extra);
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

    if (random(1, 100) <= 50) {
        // eg, "ATTENTION SCUM"
        greeting += sample(vocabulary.attention) + ' ';

    } else {
        // eg, "ATTENTION $FILTH" with a random filth name
        greeting += "attention ";
        greeting += sample(vocabulary.attentive_filth) + ': ';
    }

    // uppercase the "ATTENTION SCUM" part
    greeting = greeting.toUpperCase();

    // eg, "I hate you"
    greeting += sample(vocabulary.extra);

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
var talkLikeWarrenEllis = function(vocabulary) {
    var quote = '';

    if (random(1, 100) <= 85) {
        // eg, "Good Morning, Scum"
        quote = goodMorningScum(vocabulary);

    } else {
        // eg, "ATTENTION SCUM: I hate you"
        quote = attentionScum(vocabulary);
    }

    return quote;
};

//
// Render the page
//
var ellisism = talkLikeWarrenEllis(VOCABULARY);
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

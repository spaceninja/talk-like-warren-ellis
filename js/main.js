var content = "";

// adjective
var sexy = ['concupiscent', 'sexy', 'sleek', 'pretty', 'ambulatory', 'orgasm', 'hopping', 'purple', 'oiled', 'yummy', 'bed', 'pubic', 'lovely', 'beautiful', 'motile', 'perfumed', 'lickable'];

// adjective
var filthy = ['weevil-ridden', 'weekend', 'internet', 'filthy', 'horrendous', 'creepy', 'hideous', 'fucking', 'terrible', 'horrible', 'corrupting', 'ugly', 'frightening', 'heartless', 'deathwatch', 'doomed', 'burning', 'foul', 'strange', 'sinister'];

// adjective
var sublime = ['beautiful and terrifying', 'flourescent', 'exploding', 'post-singularity', 'disturbing', 'evil', 'electrical', 'fiery', 'galloping', 'petrochemical', 'spectral', 'space', 'great and shimmying', 'wheel-eyed', 'glowing', 'joy'];

// adjective
var moist = ['sweaty', 'greasy', 'slimy', 'oozing', 'heaving', 'spurting', 'horrendous', 'meat-based', 'greased', 'turgid', 'frozen', 'pleasure', 'suppurating', 'fragrant', 'lubricated', 'nipply', 'undulating', 'hairy', 'scrotal', 'lubricious'];

// filthy SEX monkeys
var sex = ['sex', 'love', 'orgasm', 'porn', 'pheremone', 'sin', 'slut', 'bed', 'death'];

// noun
var body_parts = ['pustules', 'polyps', 'lesions', 'intestines', 'teats', 'nodules', 'skin', 'nipples', 'treats', 'estrus bumps', 'fleshsocks', 'bones', 'fistulas', 'discharges', 'leakages', 'plague buboes', 'tumours', 'erectile tissues', 'tentacles', 'jewels', 'warts'];

// noun
var beasts = ['crows', 'wolves', 'buzzards', 'cobras', 'sharks', 'piranha', 'lungfish', 'beasts', 'lizards', 'iguanas', 'toads', 'octopi', 'squid', 'piranhas', 'urchins', 'manatees'];

// noun
var mammals = ['ducklings', 'ocelots', 'antelopes', 'chupacabras', 'goats', 'monkeys', 'apes', 'bonobos', 'chimpanzees', 'macaques', 'otters', 'wildebeest', 'stoats', 'weasels', 'fruitbats', 'lepers', 'midgets', 'lemmings', 'ferrets', 'marmosets', 'badgers', 'panthers', 'dogs', 'pigs', 'voles', 'meerkats', 'fruitbats'];

// noun
var monsters = ['ducklings', 'maggots', 'phasmids', 'mantises', 'spiders', 'fungi', 'dermestid beetles', 'vampires', 'ammonites', 'maggots', 'death spores', 'strangelets', 'shitbeetles', 'plague flies', 'freaks of nature', 'monsters', 'ghosts', 'machines', 'leeches', 'beetles', 'ghostlings', 'lice', 'spores', 'dreamgoats', 'mugwumps', 'tardigrades', 'plaguebabies'];

// noun, used in attention scum phrases
var attentive_filth = ['scum', 'filth', 'sinners', 'pariahs', 'fuckwads', 'meatbags', 'filthy animals'];

// noun
var scum = ['scum', 'shitbeetles', 'shitbirds', 'ordinary humans', 'perverts', 'meat', 'monkey people', 'scumbundles', 'scumbubbles', 'horrorbags', 'horrormonkeys', 'fuckoids', 'freakazoids', 'freakshow', 'skin things', 'animals', 'filth', 'spooklettes', 'fuckbags', 'freakpeople', 'breathing machines', 'bags of horror', 'haunted beef', 'fuckweasels', 'victims', 'shitfountains', 'fuckmuppets', 'fluffers', 'spooklings', 'arseleeches', 'sexbeasts', 'bloodbags', 'horrorpops', 'shagmuffins', 'skinmachines', 'catnipples', 'meatsprites', 'skinsacks', 'skulltrolls', 'godnipples', 'marionettes', 'bone machines', 'lovebeasts', 'fuckspores', 'nipplybeasts', 'sexbuckets', 'scumshine', 'weirdoids', 'weirdlettes', 'skinbeasts', 'heartbubbles', 'toxins', 'strange matter', 'futurenauts', 'skinbags', 'internauts', 'lovespawn', 'crotchbears', 'skin monsters', 'soulworms', 'sparklewarts', 'brothelkittens', 'deathsperms', 'salt licks', 'crotchbeetles', 'nipplewarmers', 'bedpigs'];

// noun
var bastards = ['pervert people', 'holy fools', 'deathmonkeys', 'goatfelchers', 'whores', 'space whores', 'Mongols', 'sex criminals', 'freaks', 'monkeyshaggers', 'bastards', 'doomed fools', 'thought criminals', 'munchkins', 'face criminals', 'dwarves', 'frotteurs'];

// noun, groups only
var horde = ['horde', 'hordes', 'armada', 'swarm', 'twitterhorde', 'freakscene', 'herd', 'pervherd'];

// of sexiness
var sexiness = ['frottage', 'concupiscence', 'love', 'self-pollution', 'desire', 'intrusion', 'sexcrime', 'deliciousness', 'delight', 'turgidity', 'romance', 'amour', 'joy', 'lubriciousness', 'engorgement', 'surprise', 'the boudoir', 'abandon'];

// of damnation
var ill_omen = ['impending doom', 'the apocalypse', 'contagion', 'the internet', 'intervention', 'damnation', 'death'];

// internet synonyms
var internet = ['internet', 'twitternet', 'intertube', 'interweb', 'noosphere'];

// complete phrases
var arbitrary_gnarbags = ['stains on the escutcheon of humanity itself', 'dermestid beetles on the flesh of the internet', 'horsepersons of the apocalypse', 'living towers of burning murderous leipajuusto', 'vectors of contagion', 'vials of panther sweat', 'walking slabs of haunted pork', 'mind gangsters', 'arsebiscuits', 'cockblisters deluxe', 'angels of the abyss', 'scrotal treasures', 'frightening skin machines', 'love swamis', 'crackling virility hedges', 'tops and bottoms', 'cloud of death spores', 'splodges of monkey custard', 'dollops of monkey custard', 'bundles of muck', 'brimming receptacles of deviljuice', 'tiger blood clots'];

// random attachments
var extra = ['nnaaaaarg fuck cough spit twitch jerk', 'I\'m off to the pub.', 'I WILL FUCKING CUT YOU', 'BABY HEADS SPANNERS PLAGUE COCKS', 'You may amuse me now.', 'I BLEED RED BULL', 'I hate you with the fire of ten suns.', 'Damn you all. (waves cane menacingly) (coughs consumptively)', 'You may tell me that you love me now.', 'hahaha suffer', 'Everyone take their clothes off now.', 'I spat in that last drink I bought you.', 'Sit in my lap and tell me you\'re sorry.', 'fuck you i am batman', 'You will all pay.', 'I blame YOU.', 'jesus christ mutter fuck'];

// greetings
var salutation = ['Good morning,', 'Good evening,', 'Good night,', 'Good day,', 'Good afternoon,'];

// greetings, used in attention scum phrases
var attention = ['ATTENTION SCUM:', 'ATTENTION SINNERS:'];

var buildQuote = function() {
    content = "blah blah";
};

// Build the date list
buildQuote();

// Write the date list to the browser
document.getElementById('quote').innerHTML = content;

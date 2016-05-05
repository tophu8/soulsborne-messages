(function () {
    'use strict';
    
    var TEMPLATES = [
        '**** ahead',
        'No **** ahead',
        '**** required ahead',
        'be wary of ****',
        'try ****',
        'Could this be a ****?',
        'If only I had a ****...',
        'visions of ****...',
        'Time for ****',
        '****',
        '****!',
        '****?',
        '****...',
        'Huh. It\'s a ****...',
        'praise the ****!',
        'Let there be ****',
        'Ahh, ****...'
    ];
    var CONJUNCTIONS = [
        'and then',
	'but',
        'therefore',
        'in short',
        'or',
        'only',
        'by the way',
        'so to speak',
        'all the more',
        ','
    ];
    var CATEGORIES = {
        'Creatures': [
        'enemy',
        'monster',
        'mob enemy',
        'tough enemy',
        'critical foe',
        'Hollow',
        'pilgrim',
        'prisoner',
        'monstrosity',
        'skeleton',
        'ghost',
        'beast',
        'lizard',
        'bug',
        'grub',
        'crab',
        'dwarf',
        'giant',
        'demon',
        'dragon',
        'knight',
        'sellword',
        'warrior',
        'herald',
        'bandit',
        'assassin',
        'sorcerer',
        'pyromancer',
        'cleric',
        'deprived',
        'sniper',
        'duo',
        'trio',
        'you',
        'you bastard',
        'good fellow',
        'saint',
        'wretch',
        'charmer',
        'poor soul',
        'oddball',
        'nimble one',
        'laggard',
        'moneybags',
        'beggar',
        'miscreant',
        'liar',
        'fatty',
        'beanpole',
        'youth',
        'elder',
        'old codger',
        'old dear',
        'merchant',
        'artisan',
        'master',
        'sage',
        'champion',
        'Lord of Cinder',
        'king',
        'queen',
        'prince',
        'princess',
        'angel',
        'god',
        'friend',
        'ally',
        'spouse',
        'covenantor',
        'Phantom',
        'Dark Spirit'
        ],
        'Objects': [
        'bonfire',
        'ember',
        'fog wall',
        'lever',
        'contraption',
        'key',
        'trap',
        'torch',
        'door',
        'treasure',
        'chest',
        'something',
        'quite something',
        'rubbish',
        'filth',
        'weapon',
        'shield',
        'projectile',
        'armor',
        'item',
        'ring',
        'ore',
        'coal',
        'transposing kiln',
        'scroll',
        'umbral ash',
        'throne',
        'rite',
        'coffin',
        'cinder',
        'ash',
        'moon',
        'eye',
        'brew',
        'soup',
        'message',
        'bloodstain',
        'illusion'
        ],
        'Techniques': [
        'close-ranged battle',
        'ranged battle',
        'eliminating one at a Time',
        'luring it out',
        'beating to a pulp',
        'ambush',
        'pincer attack',
        'hitting them in one swoop',
        'duel-wielding',
        'stealth',
        'mimicry',
        'fleeing',
        'charging',
        'jumping off',
        'dashing through',
        'circling around',
        'trapping inside',
        'rescue',
        'Skill',
        'sorcery',
        'pyromancy',
        'miracles',
        'pure luck',
        'prudence',
        'brief respite',
        'play dead'
        ],
        'Actions': [
        'jog',
        'dash',
        'rolling',
        'backstepping',
        'jumping',
        'attacking',
        'jump attack',
        'dash attack',
        'counter attack',
        'stabbing in the back',
        'guard stun & stab',
        'plunging attack',
        'shield breaking',
        'blocking',
        'parrying',
        'locking-on',
        'no lock-on',
        'two-handing',
        'gesture',
        'control',
        'destroy'
        ],
        'Geography': [
        'boulder',
        'lava',
        'poison gas',
        'enemy horde',
        'forest',
        'swamp',
        'cave',
        'shortcut',
        'detour',
        'hidden path',
        'secret passage',
        'dead end',
        'labyrinth',
        'hole',
        'bright spot',
        'dark spot',
        'open area',
        'tight spot',
        'safe zone',
        'danger zone',
        'sniper spot',
        'hiding place',
        'illusory wall',
        'ladder',
        'lift',
        'gorgeous view',
        'looking away',
        'overconfidence',
        'slip-up',
        'oversight',
        'fatigue',
        'bad luck',
        'inattention',
        'loss of stamina',
        'chance encounter',
        'planned encounter'
        ],
        'Orientation': [
        'front',
        'back',
        'left',
        'right',
        'up',
        'down',
        'below',
        'above',
        'behind'
        ],
        'Body parts': [
        'head',
        'neck',
        'stomach',
        'back',
        'armor',
        'finger',
        'leg',
        'rear',
        'tail',
        'wings',
        'anywhere',
        'tongue',
        'right arm',
        'left arm',
        'thumb',
        'indexfinger',
        'longfinger',
        'ringfinger',
        'smallfinger',
        'right leg',
        'left leg',
        'right side',
        'left side',
        'pincer',
        'wheel',
        'core',
        'mount'
        ],
        'Attribute': [
        'regular',
        'strike',
        'thrust',
        'slash',
        'magic',
        'crystal',
        'fire',
        'chaos',
        'lightning',
        'blessing',
        'dark',
        'critical hits',
        'bleeding',
        'poison',
        'toxic',
        'frost',
        'curse',
        'equipment breakage'
        ],
        'Concepts': [
        'chance',
        'quagmire',
        'hint',
        'secret',
        'sleeptalk',
        'happiness',
        'misfortune',
        'life',
        'death',
        'demise',
        'joy',
        'fury',
        'agony',
        'sadness',
        'tears',
        'loyalty',
        'betrayal',
        'hope',
        'despair',
        'fear',
        'losing sanity',
        'victory',
        'defeat',
        'sacrifice',
        'light',
        'dark',
        'bravery',
        'confidence',
        'vigor',
        'revenge',
        'resignation',
        'overwhelming',
        'regret',
        'pointless',
        'man',
        'woman',
        'friendship',
        'love',
        'recklessness',
        'composure',
        'guts',
        'comfort',
        'silence',
        'deep',
        'dregs'
        ],
        'Musings': [
        'good luck',
        'fine work',
        'I did it!',
        'I\'ve failed...',
        'here!',
        'not here!',
        'I can\'t take this...',
        'lonely...',
        'don\'t you dare!',
        'do it!',
        'look carefully',
        'listen carefully',
        'think carefully',
        'this place again?',
        'now the real fight begins',
        'you don\'t deserve this',
        'keep moving',
        'pull back',
        'give it up',
        'don\'t give up',
        'help me...',
        'impossible...',
        'bloody expensive...',
        'let me out of here...',
        'stay calm',
        'like a dream...',
        'seems familiar...',
        'are you ready?',
        'it\'ll happen to you too',
        'praise the Sun!',
        'may the flames guide thee'
        ]
    };

    var WORDS = _.chain(CATEGORIES).values().flatten().value();
    var input = document.getElementById('code');
    var messageContainer = document.getElementById('message');

    if (!window.location.hash) {
        window.location.href = '/create';
    }

    try {
        var message = getMessage(window.location.hash.replace(/#/, ''));
        messageContainer.innerHTML = message;
    } catch (e) {
        console.error('Error: ' + e);
        messageContainer.innerHTML = '';
    }

    function getMessage(code) {
        if (!code.match(/^[0-9a-g][0-9a-z]{2}$/) && !code.match(/^[0-9a-g][0-9a-z]{2}[0-9][0-9a-g][0-9a-z]{2}$/)) {
            throw 'Invalid code';
        }

        if (code.length === 3) {
            var templateId = code[0];
            var wordId = code.slice(1, 3);

            var template = getTemplate(templateId);
            var word = getWord(wordId);

            return makeSentence(template, word);
        }

        if (code.length === 7) {
            var templateId = code[0];
            var wordId = code.slice(1, 3);

            var template = getTemplate(templateId);
            var word = getWord(wordId);

            var partOne = makeSentence(template, word);

            var conjunctionId = code[3];
            templateId = code[4];
            wordId = code.slice(5, 7);

            var conjunction = getConjunction(conjunctionId);
            var template = getTemplate(templateId);
            var word = getWord(wordId);

            var partTwo = makeSentence(template, word);

            return partOne + '<br>' + conjunction + ' ' + partTwo;
        }
    }

    function getTemplate(codePart) {
        codePart = parseInt(codePart.trim(), 17);
        var template = TEMPLATES[codePart];
        if (!template) {
            throw 'Invalid template';
        }
        return template;
    }

    function getConjunction(codePart) {
        codePart = parseInt(codePart.trim(), 10);
        var conjunction = CONJUNCTIONS[codePart];
        if (!conjunction) {
            throw 'Invalid conjunction';
        }
        return conjunction;
    }

    function getWord(codePart) {
        codePart = parseInt(codePart.trim(), 36);
        var word = WORDS[codePart];
        if (!word) {
            throw 'Invalid word';
        }
        return word;
    }

    function makeSentence(template, word) {
        return template.replace(/\*\*\*\*/, word.trim());
    }
}());

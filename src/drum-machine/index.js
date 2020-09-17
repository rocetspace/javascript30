;(function() {

    // sounds
    const sounds = [
        {
            key: 'A',
            keyCode: 65,
            description: 'Clap',
            sound: 'clap',
        },
        {
            key: 'S',
            keyCode: 83,
            description: 'Hihat',
            sound: 'hihat',
        },
        {
            key: 'D',
            keyCode: 68,
            description: 'Kick',
            sound: 'kick',
        },
        {
            key: 'F',
            keyCode: 70,
            description: 'Openhat',
            sound: 'openhat',
        },
        {
            key: 'G',
            keyCode: 71,
            description: 'Boom',
            sound: 'boom',
        },
        {
            key: 'H',
            keyCode: 72,
            description: 'Ride',
            sound: 'ride',
        },
        {
            key: 'J',
            keyCode: 74,
            description: 'Snare',
            sound: 'snare',
        },
        {
            key: 'K',
            keyCode: 75,
            description: 'Tom',
            sound: 'tom',
        },
        {
            key: 'L',
            keyCode: 76,
            description: 'Tink',
            sound: 'tink',
        },
    ];

    const createKeyElement = (options) => {
        const wrapperElement = document.createElement('div');
        const descElement = document.createElement('div');
        const keyElement = document.createElement('div');

        wrapperElement.appendChild(keyElement);
        wrapperElement.appendChild(descElement);

        wrapperElement.dataset.key = options.keyCode;
        wrapperElement.setAttribute('class', 'wrapper');
        descElement.setAttribute('class', 'desc');
        keyElement.setAttribute('class', 'key');

        descElement.innerText = options.description;
        keyElement.innerText = options.key;

        return wrapperElement;
    };

    const keyCodeElementMap = {};
    const keyCodeAudioMap = {};
    const keysElement = document.getElementById('keys');

    // creates and append elements
    sounds.forEach((sound) => {
        const keyElement = createKeyElement(sound);

        keysElement.appendChild(keyElement);
        keyCodeAudioMap[sound.keyCode] = document.getElementById(sound.sound);
        keyCodeElementMap[sound.keyCode] = keyElement;

        return keyElement;
    });

    document.body.addEventListener('keydown', function(e) {
        const keyCode = e.keyCode || e.which;
        const elementByCode = keyCodeElementMap[keyCode];

        if (elementByCode) {
            const clonedElement = elementByCode.cloneNode(true);
            const audioElement = keyCodeAudioMap[keyCode];

            audioElement.currentTime = 0;
            audioElement.play();

            elementByCode.parentNode.replaceChild(
                clonedElement,
                elementByCode
            );

            keyCodeElementMap[keyCode] = clonedElement;
            clonedElement.classList.add('press');
        } 
    });

})();
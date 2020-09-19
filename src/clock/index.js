; (function () {

    const hourEl = document.querySelector('.hour');
    const minuteEl = document.querySelector('.minute');
    const secondEl = document.querySelector('.second');

    const HOURS = 12;
    const HOURS_STEP = 360 / HOURS;
    const MINUTES_STEP = 360 / 60;
    const SECONDS_STEP = 360 / 60;
    const INTERVAL_TIME = 1000;

    function rotate(el, value) {
        el.style.transform = `rotate(${value}deg)`;
    }

    function update() {
        const currentD = new Date();

        const currentHours = currentD.getHours();
        const hours = currentHours >= HOURS ?
            currentHours - HOURS :
            currentHours;

        rotate(hourEl, hours * HOURS_STEP);
        rotate(minuteEl, currentD.getMinutes() * MINUTES_STEP);
        rotate(secondEl, currentD.getSeconds() * SECONDS_STEP);
    }

    setTimeout(function() {
        setInterval(update, INTERVAL_TIME);
    }, (new Date()).getMilliseconds());

    // init
    update();

})();
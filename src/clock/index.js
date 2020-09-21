; (function () {

    const hourEl = document.querySelector('.hour');
    const minuteEl = document.querySelector('.minute');
    const secondEl = document.querySelector('.second');

    const HOURS = 12;
    const HOURS_STEP = 360 / HOURS;
    const MINUTES_STEP = 360 / 60;
    const SECONDS_STEP = 360 / 60;
    const INTERVAL_TIME = 1000;

    let d = new Date();
    let date = {
        value: d,
        seconds: d.getSeconds(),
        minutes: d.getMinutes(),
        hours: convertHours(d.getHours()),

        getValues: function() {
            return {
                hours: this.hours,
                minutes: this.minutes,
                seconds: this.seconds++,
            };
        },

        update: function () {
            let d = new Date();

            this.value = d;
            this.seconds = d.getSeconds();
            this.minutes = d.getMinutes();
            this.hours = convertHours(d.getHours());

            return this;
        },
    };

    // utils
    /**
     * Convert value from 24-hour to 12-hour system
     * @param {number} hours 
     * @return {number}
     */
    function convertHours(hours) {
        return hours >= HOURS ? hours - HOURS : hours;
    }

    /**
     * Rotate (animated) provided element to provided values
     * @param {HTMLELement} el 
     * @param {number} to 
     */
    function rotate(el, to) {
        el.style.transform = `rotate(${to}deg)`;
    }

    function update() {
        const newDate = date.update().getValues();

        const hoursDeg = newDate.hours * HOURS_STEP;
        const minDeg = newDate.minutes * MINUTES_STEP;
        const secDeg = newDate.seconds * SECONDS_STEP;

        rotate(hourEl, hoursDeg);
        rotate(minuteEl, minDeg);
        rotate(secondEl, secDeg);
    }

    // TODO: fix animated rotation from 360 to 0
    setInterval(
        (update(), update),
        INTERVAL_TIME
    );

})();
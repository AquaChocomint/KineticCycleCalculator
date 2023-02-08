const calculator = {
    run: function () {
        const start = {
            year: Number(document.getElementById('start-year').value),
            month: Number(document.getElementById('start-month').value),
            day: Number(document.getElementById('start-day').value),
            hour: Number(document.getElementById('start-hour').value),
            minute: Number(document.getElementById('start-minute').value),
            asFullSecond: () => start.date().getTime() / 1000,
            date: () => new Date(start.format()),
            format: () => start.year + '/' + start.month + '/' + start.day + ' ' + start.hour + ':' + start.minute
        };

        const end = {
            year: Number(document.getElementById('end-year').value),
            month: Number(document.getElementById('end-month').value),
            day: Number(document.getElementById('end-day').value),
            hour: Number(document.getElementById('end-hour').value),
            minute: Number(document.getElementById('end-minute').value),
            asFullSecond: () => end.date().getTime() / 1000,
            date: () => new Date(end.format()),
            format: () => end.year + '/' + end.month + '/' + end.day + ' ' + end.hour + ':' + end.minute
        };

        const interval = {
            hour: Number(document.getElementById('interval-hour').value) || 0,
            minute: Number(document.getElementById('interval-minute').value) || 30,
            second: Number(document.getElementById('interval-second').value) || 0,
            asFullSecond: () => 3600 * interval.hour + 60 * interval.minute + interval.second
        };

        /**
         * @type {HTMLInputElement}
         */
        const output = document.getElementById('result');

        const includeFirst = document.getElementById('first').checked;

        const diff = end.asFullSecond() - start.asFullSecond();

        let count = diff / interval.asFullSecond();

        if(includeFirst){
            count++;
        }

        output.value = isNaN(count) ? 'Invalid Date' : String(Math.ceil(count));
    },

    setStartCurrentTime: function () {
        const date = new Date();

        document.getElementById('start-year').value = String(date.getFullYear());
        document.getElementById('start-month').value = String(date.getMonth() + 1);
        document.getElementById('start-day').value = String(date.getDate());
        document.getElementById('start-hour').value = String(date.getHours());
        document.getElementById('start-minute').value = String(date.getMinutes());
    },

    setEndCurrentTime: function () {
        const date = new Date();

        document.getElementById('end-year').value = String(date.getFullYear());
        document.getElementById('end-month').value = String(date.getMonth() + 1);
        document.getElementById('end-day').value = String(date.getDate());
        document.getElementById('end-hour').value = String(date.getHours());
        document.getElementById('end-minute').value = String(date.getMinutes());
    },

    setButtonListener: function () {
        const calculateButton = document.getElementById('calculate');
        calculateButton.addEventListener('click', () => calculator.run());

        const setEndButton = document.getElementById('update-time-end');
        setEndButton.addEventListener('click', () => calculator.setEndCurrentTime());

        const setStartButton = document.getElementById('update-time-start');
        setStartButton.addEventListener('click', () => calculator.setStartCurrentTime());
    }
};

window.addEventListener('load', () => {
    calculator.setButtonListener();
});
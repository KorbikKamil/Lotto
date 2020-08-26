(function () {

    let btn = document.querySelector('#getNumbers'),
        output = document.querySelector('#showNumbers');

    function showRandomNumbers() {
        let numbers = [],
            i = 0;

        while (i < 6) {
            let randomNumber = Math.round(Math.random() * (49 - 1) + 1);
            if (numbers.includes(randomNumber)) continue;
            numbers.push(randomNumber);
            i++;
        }

        output.value = numbers.join(', ');
    }

    btn.onclick = showRandomNumbers;
})();
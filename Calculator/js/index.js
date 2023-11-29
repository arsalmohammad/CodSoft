function load() {
    var btns = document.querySelectorAll('#calculator span');
    var operators = ['+', '-', 'x', '÷'];
    var inputScreen = document.querySelector('#screen');
    var btnValue;
    var input = '';
    var calculation = '';

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            btnValue = this.innerHTML;

            if (btnValue === 'Clr') {
                inputScreen.innerHTML = '';
                input = '';
                calculation = '';
            } else if (btnValue === '=') {
                if (calculation) {
                    calculation += input;
                    inputScreen.innerHTML = evaluateExpression(calculation);
                    calculation = '';
                    input = inputScreen.innerHTML;
                }
            } else if (operators.indexOf(btnValue) > -1) {
                inputScreen.innerHTML = btnValue;
                calculation += input + btnValue;
                input = '';
            } else {
                if (operators.some(operator => inputScreen.innerHTML.includes(operator))) {
                    inputScreen.innerHTML = '';
                }
                inputScreen.innerHTML += btnValue;
                input += btnValue;
            }
        });
    }

    function evaluateExpression(expression) {
        var result = eval(expression.replace(/x/g, '*').replace(/÷/g, '/'));
        return Number.isInteger(result) ? result : result.toFixed(2);
    }
}

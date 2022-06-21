Задание №1.

function primeNumbers() {
    var setOfNumbers = +prompt('Введите конечное значение числового ряда от 2 до 100 для вывода простых чисел');
    var i = 2;
    var primeArr = [ ];
    while (i <= setOfNumbers)
    { if (i==2 || i==3 || i==5 || i==7) {
    primeArr.push(" " + i);
    i++
    continue;
    } else if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
    i++;
    continue;
    }
    primeArr.push(" " + i++);
    }
    document.getElementById('question-1').innerHTML = (primeArr);
    }
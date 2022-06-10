Задание №6

Реализовать функцию с тремя параметрами:
     /* function mathOperation(arg1, arg2, operation),
     * где arg1, arg2 – значения аргументов, operation – строка с названием операции.
     * В зависимости от переданного значения операции выполнить одну из арифметических операций
     * (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
     */

    function mathOperation(arg1, arg2, operation) {
        var result = false;

        switch (operation) {
            case "summ":
                result = summ(arg1, arg2);
                break;
            case "divide":
                result = divide(arg1, arg2);
                break;
            case "subtr":
                result = subtr(arg1, arg2);
                break;
            case "multiply":
                result = multiply(arg1, arg2);
                break;
        }
        return result;
    }

    console.log(mathOperation(30, 20, "subtr"));
Задание №2 и №3.

function countBasketPrice() {
    var basket = [
    {
    title: 'Товар-1',
    price: 100,
    count: 3
    },
    {
    title: 'Товар-2',
    price: 200,
    count: 5
    },
    {
    title: 'Товар-3',
    price: 300,
    count: 1
    },
    ];
    
    var sum = 0;
    var quantity = 0;
    var name = 'В корзине находится товар следующих наименований: ';
    for (var item of basket) {
    sum += (item.price * item.count);
    quantity += item.count;
    name += '(' + item.title + ') ';
    }
    var q = basket.length;
    document.getElementById('question-2-3').innerHTML = 'Всего товаров в корзине: ' + q + '.' + name + '.' +
    'Общее количество выбранных позиций товаров составляет, шт.: ' + quantity + '.' +
    'Стоимость всех выбранных товаров в корзине составляет, руб.: ' + sum + '.';
    }
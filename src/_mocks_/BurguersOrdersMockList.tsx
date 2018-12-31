import Order from 'src/models/Order';
import Burguer from 'src/models/Burguer';

export const BurguersOrdersMockList = [
    new Order(0, "Paul", [
        new Burguer("X-Burguer", ["Bread", "Meat", "Cheese"], 5.0)
    ], false),
    new Order(1, "Carl", [
        new Burguer("X-Burguer", ["Bread", "Meat", "Cheese"], 5.0),
        new Burguer("X-Burguer Salad", ["Bread", "Meat", "Cheese", "Salad", "Tomato"], 6.0)
    ], true),
    new Order(2, "Michone", [
        new Burguer("X-Burguer", ["Bread", "Meat", "Cheese"], 5.0),
        new Burguer("X-Burguer Bacon", ["Bread", "Meat", "Cheese", "Bacon"], 7.0)
    ], false),
    new Order(3, "Rick", [
        new Burguer("X-Burguer", ["Bread", "Meat", "Cheese"], 5.0),
        new Burguer("X-Burguer Salad", ["Bread", "Meat", "Cheese", "Salad", "Tomato"], 6.0),
        new Burguer("X-Burguer Bacon", ["Bread", "Meat", "Cheese", "Bacon"], 7.0)
    ], true),
    new Order(4, "Jhon", [
        new Burguer("X-Burguer Salad", ["Bread", "Meat", "Cheese", "Salad", "Tomato"], 6.0)
    ], false),
    new Order(5, "Edward", [
        new Burguer("X-Burguer Bacon", ["Bread", "Meat", "Cheese", "Bacon"], 7.0)
    ], true),
    new Order(6, "Aria", [
        new Burguer("X-Burguer Salad", ["Bread", "Meat", "Cheese", "Salad", "Tomato"], 6.0),
        new Burguer("X-Burguer Bacon", ["Bread", "Meat", "Cheese", "Bacon"], 7.0)
    ], false),
    new Order(7, "Sansa", [
        new Burguer("X-Burguer", ["Bread", "Meat", "Cheese"], 5.0),
        new Burguer("X-Burguer Salad", ["Bread", "Meat", "Cheese", "Salad", "Tomato"], 6.0),
        new Burguer("X-Burguer Bacon", ["Bread", "Meat", "Cheese", "Bacon"], 7.0)
    ], false),
    new Order(8, "Tyrion", [
        new Burguer("X-Burguer", ["Bread", "Meat", "Cheese"], 5.0),
        new Burguer("X-Burguer", ["Bread", "Meat", "Cheese"], 5.0),
        new Burguer("X-Burguer", ["Bread", "Meat", "Cheese"], 5.0),
        new Burguer("X-Burguer Salad", ["Bread", "Meat", "Cheese", "Salad", "Tomato"], 6.0),
        new Burguer("X-Burguer Bacon", ["Bread", "Meat", "Cheese", "Bacon"], 7.0),
        new Burguer("X-Burguer Bacon", ["Bread", "Meat", "Cheese", "Bacon"], 7.0)
    ], true)
];
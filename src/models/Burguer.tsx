export default class Burguer {
    name: string;
    ingredients: string[];
    price: number;

    constructor(name: string, ingredients: string[], price: number) {
        this.name = name;
        this.ingredients = ingredients;
        this.price = price;
    }
}
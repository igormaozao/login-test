import Burguer from './Burguer';

export default class Order {
    id: number;
    clientName: string;
    burguers: Burguer[];
    delivery: boolean;

    constructor(id:number, clientName:string, burguers: Burguer[], delivery: boolean) {
        this.id = id;
        this.clientName = clientName;
        this.burguers = burguers;
        this.delivery = delivery;
    }

    addBurguer(burguer: Burguer) {
        this.burguers.push(burguer);
    }

    removeBurguer(burguer: Burguer) {
        this.burguers = this.burguers.filter(b => b.name !== burguer.name && b.ingredients !== burguer.ingredients);
    }

    totalOrderPrice(): number {
        let total = 0.0;
        this.burguers.map(b => total += b.price);
        return total;
    }
}
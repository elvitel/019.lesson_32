class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    static get SIZE_SMALL() {
        return {name: 'sizeSmall', price: 50, callorie: 20};
    }

    static get SIZE_BIG() {
        return {name: 'sizeBig', price: 100, callorie: 40};
    }

    static get STUFFING_CHEESE() {
        return {name: 'stuffingCheese', price: 10, callorie: 20};
    }

    static get STUFFING_SALAD() {
        return {name: 'stuffingSalad', price: 20, callorie: 5};
    }

    static get STUFFING_POTATO() {
        return {name: 'stuffingPotato', price: 15, callorie: 10};
    }

    static get TOPPING_MAYO() {
        return {name: 'toppingMayo', price: 15, callorie: 0};               
    }

    static get TOPPING_SAUCE() {
        return {name: 'toppingSauce', price: 20, callorie: 5};
    }

    addTopping(topping) {
        this.toppings.push(topping);
        return this.toppings;
    }

    calculate() {
        return this.size.callorie + this.stuffing.callorie + this.toppings.reduce((sum, topping) => sum + topping.callorie, 0);
    }

    calculatePrice() {
        return this.size.price + this.stuffing.price + this.toppings.reduce((sum, topping) => sum + topping.price, 0);
    }
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log('Calories: ' + hamburger.calculate());

console.log('Price: ' + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log('Price with sauce: ' + hamburger.calculatePrice());
const Candy = require('./Candy');
const AppleFavoredCandy = require('./AppleFavoredCandy');
const BananaFavoredCandy = require('./BananaFavoredCandy');
const OrangeFavoredCandy = require('./OrangeFavoredCandy');

class Gift {
    constructor () {
        this.candies = [];
    } 
    addCandy(candy) {
this.candies.push(candy);
    }    
    getGiftWeight() {
        let totalWeight = 0;
        for(const candy of this.candies) {
            totalWeight += candy.weight;
        }
        return totalWeight;
    }   
    sortCandiesByWeight() {
        this.candies.sort((a, b)=> a.weight - b.weight);
    }
    findCandiesInTasteRange(minWieght, maxWieght) {
        return this.candies.filter((candy) => candy.weight >= minWieght && candy.weight <= maxWieght);
    }
}
const appleFavoredCandy = new AppleFavoredCandy ("Яблочная конфета", 10 );
const bananaFavoredCandy = new BananaFavoredCandy ("Банановая конфета", 12 );
const orangeFavoredCandy = new OrangeFavoredCandy("апельсиновая конфета", 8);

const gift = new Gift();

gift.addCandy(appleFavoredCandy);
gift.addCandy(bananaFavoredCandy );
gift.addCandy(orangeFavoredCandy);
console.log ("общий вес подарка:", gift.getGiftWeight());

const candiesByWeight = gift.findCandiesInTasteRange(8, 12);
console.log("конфеты в заданном диапазоне веса (8-12г):", candiesByWeight )










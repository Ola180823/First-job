const Candy = require('./Candy')

class BananaFavoredCandy extends Candy {
    constructor (name, weight) {
    super(name, weight, "banana");
   }
}
module.exports =  BananaFavoredCandy;
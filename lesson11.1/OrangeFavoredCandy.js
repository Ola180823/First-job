const Candy = require('./Candy')

class OrangeFavoredCandy extends Candy {
    constructor (name, weight) {
    super(name, weight, "orange");
   }
}
module.exports =   OrangeFavoredCandy;
const Candy = require('./Candy')


class AppleFavoredCandy extends Candy {
    constructor (name, weight ) {
    super(name, weight, "apple");
   }
}


module.exports =  AppleFavoredCandy;
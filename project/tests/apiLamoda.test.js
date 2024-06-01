const axios = require('axios');
//import { expect } from 'chai';
const  validate = new validator();



describe(`API lamoda tests`, function() {
    describe(` `, function () {
        let response;
        beforeAll(async () => {
            response = await axios.get('https://www.lamoda.by/apix/searchbyaoid/?aoid=16034', {
                
                  params:  {'level_name': '"city",…'},
                  headers: { 'X-Trace-Id':'78ff9c51689740f76090c03dabe531a',
                             'X-Xss-Protection': '1; report=/error/xss/'
                  }

               
           })
           
        })     
    })
        
})
test(`should return status code 200`, async () => {
    expect(response.status).toBe(200);
});
test.skip (`should valid response body`, async() => {
    const result = validate.validata(response.data,lamodaApi);
    expect(result.validate).to.equal(true);
});


const axios = require('axios');
const Validator = require('jsonschema').Validator;
const validate = new Validator();
const coverPhotos = require('../data/.schema.v1.json');

     describe('API/v1/coverPhotos/{id}', function(){
        let response;
         beforeAll(async () => {
            response =  await axios.get( 'https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos/123', {  
                  "id": 123,
                  "idBook": 123,
              headers: {
                   accept: 'text/plain; v=1.0',                 
               }
             })
          });
          test(`should  return status code 200`, async() =>{ 
              expect(response.status).toBe(200);
          })     
          test(`should be valid response body`, async () => {  
              const result = validate.validate(response.data, coverPhotos);
              expect(result.valid).toBe(true); 
          })
      }); 
      

    
   

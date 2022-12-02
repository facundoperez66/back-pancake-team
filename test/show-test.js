const app = require('../app');
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

describe('hotels', function(done){
    it("Delete a hotel successfully", function (done) {
        token = 'ya29.a0AeTM1icu-VfS6iuqLHuqi8G-n1sadVgygBq54QEeKnz5uF5tUvkUvJO9YuK7GoA_192oZCpovEF-2M0tZAJTDhgLPZs7t_ZDlKvQKOSlaGttDP76dhr9S2ZpAb1ADVdEWK_13o76-MY9pC0Uyq7ecKmwN67BaCgYKAaYSARMSFQHWtWOmXWEJWHfKlCP8D25SWi2zJA0163',
        idHotel = '63731137d4d018808a254b3e'
        request(app)
            .delete(`/api/hotels/${idHotel}`)
            .auth(token, { type: "bearer" })
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
})
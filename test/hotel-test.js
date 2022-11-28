const app = require('../app');
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')


describe('hotels',function(done){
    
    it('retorna un error cuando el filto no encuentra un hotel',function(done){
        request(app)
            .get(`/hotels/637084d4caa81e856ac3012d`)
            .expect(404)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    }),
    it('The field capacity is a number', function (done) {
        request(app)
        .post('/api/hotels')
        .send({
            'name':'The Principal Madrid Hotel',
            'photo': ["https://photos.hotelbeds.com/giata/bigger/40/407811/407811a_hb_a_002.jpg",
            "https://th.bing.com/th/id/OIP.kIiyzIjCMBpSVIEIVZtL9wHaFj?pid=ImgDet&rs=1",
            "https://media.cntraveler.com/photos/5ceda2158ce15e4031f372df/master/w_1200,c_limit/The-Principal-Madrid-Hotel_201929_Solarium.jpg",
            ],
            'capacity': 3500,
            'cityId':'637084d4caa81e856ac30130',
            'userId':'636fe5cd55d86e11bfaebc4a',
        })
        .expect(res=>{
            assert.isNumber(res.body.new_hotel.capacity)
        })
        .end(function(err){
            if(err) return done(err)
            done()
        })
    })

    it('hotel was created succesfully', function(done){
        request(app)
        .post('/api/hotels')
        .send({
            'name':'The Principal Madrid Hotel',
            'photo': ["https://photos.hotelbeds.com/giata/bigger/40/407811/407811a_hb_a_002.jpg",
            "https://th.bing.com/th/id/OIP.kIiyzIjCMBpSVIEIVZtL9wHaFj?pid=ImgDet&rs=1",
            "https://media.cntraveler.com/photos/5ceda2158ce15e4031f372df/master/w_1200,c_limit/The-Principal-Madrid-Hotel_201929_Solarium.jpg",
            ],
            'capacity': 3500,
            'cityId':'637084d4caa81e856ac30130',
            'userId':'636fe5cd55d86e11bfaebc4a',
        })
        .expect(201)
        .end(function(err){
            if(err) return done(err)
            done()
        })
    })

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
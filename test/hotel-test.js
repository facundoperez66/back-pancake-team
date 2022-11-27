const app = require('../app');
const chai = require('chai')
const assert = chai.assert
const request = require('supertest');
const { expect } = require('chai');

describe('hotels', function (done) {
    this.timeout(10000)
    it('Return an error when the filter does not find a hotel', function (done) {
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
            .post(`/api/hotels/`)
            .send({
                name: "Ibis Paris Tour Eiffel Cambronne 15ème ",
        photo: ["https://media.staticontent.com/media/pictures/0ee0c769-c98f-4671-912b-32d96d65b9a4/1280x570",
                "https://th.bing.com/th/id/OIP.HQIuz8EnaFRy0mYblLijnwHaFj?pid=ImgDet&rs=1",
                "https://th.bing.com/th/id/OIP.QjaW1rfaaTgRlXn1MARTFwHaD5?pid=ImgDet&rs=1",
        ],
        capacity: 1500,
        citiId: "637084d4caa81e856ac3012d",
        userId: "636fe5cd55d86e11bfaebc4a"
            })
            .expect(res => {
                assert.isNumber(res.body.new_hotel.capacity)
            })
            .end(function (err) {
                if (err) return done(err);
                done();
            });
    }),

    describe('POST /hotels', function () {

        it('should be status 201', function (done) {
            request(app)
                .post('/api/hotels')
                .send({
                    name: "hotel del rio",
                    photo: "https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2022/05/06/62752986a0b9f.r_1651848957740.0-73-1500-823.jpeg",
                    capacity:5020,
                    cityID:"636d3af27ccd7c6ea97b82e4",
                    userID:"636d210297606439046194bb"
                })
                .expect(res=>{
                    let response = res.status
                    assert.strictEqual(response,201)
                })
                .end((err, res) => {
                    if(err){
                        return done(err)
                    }
                    return done()
                })
        })})
})
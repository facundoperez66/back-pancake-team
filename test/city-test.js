const app = require('../app');
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

describe('GET /api/cities/', function () {
    it('Debe retornar un array de objetos', function (done) {
        request(app)
            .get(`/api/cities/`)
            .expect(res => {
                assert.isArray(res.body.data)
                res.body.data.forEach(city => {
                    assert.isObject(city)
                })
            })
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    })
})
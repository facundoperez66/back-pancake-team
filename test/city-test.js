const app = require('../app');
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

describe('Cities', function (done) {
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
    it('verify that the user sends a string in the name field when creating a city', function (done) {
        request(app)
            .post(`/api/cities/`)
            .send({
                name: "Paris",
                continent: "Europe",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
                population: 2229621,
                userId: "636fe5cd55d86e11bfaebc4a"
            })
            .expect(res => {
                assert.isString(res.body.new_city.name)
            })
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    })
    it('Verify that returns success false when unable to create a city', function (done) {
        request(app)
            .post(`/api/cities/`)
            .send({
                population: 653211,
            })
            .expect(res => res.success === false)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    })

    it("Delete a city successfully", function (done) {
        token = 'ya29.a0AeTM1icu-VfS6iuqLHuqi8G-n1sadVgygBq54QEeKnz5uF5tUvkUvJO9YuK7GoA_192oZCpovEF-2M0tZAJTDhgLPZs7t_ZDlKvQKOSlaGttDP76dhr9S2ZpAb1ADVdEWK_13o76-MY9pC0Uyq7ecKmwN67BaCgYKAaYSARMSFQHWtWOmXWEJWHfKlCP8D25SWi2zJA0163'
        idCity = '637084d4caa81e856ac3012f'
        request(app)
            .delete(`/api/cities/${idCity}`)
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
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')

//configure chai

chai.use(chaiHttp)
chai.should()

describe("Make Sure that status is 200", function () {
    it("should return 200", (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                done()
            }
            )
    })

})

describe("Make sure registration fails on no data", function () {
    it("should return 400", (done) => {
        chai.request(app)
            .post('/register')
            .end((err, res) => {
                res.should.have.status(400)
                done()
            }
            )
    })

})


const request = require('request');
const expect = require('chai').expect;

describe('Index page', () => {
    const url = 'http://localhost:7865';

    it('responds with status code 200', async () => {
        request(url, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
        });
    });

    it('responds with correct result', async () => {
        request(url, (err, res, body) => {
            expect(body).to.equal('Welcome to the payment system');
        });
    });

    it('responds with correct headers', async () => {
        request(url, (err, res, body) => {
            expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
            expect(res.headers['content-length']).to.equal('29');
        });
    });

    it('responds with status code 200', async () => {
        request(url + '/cart/123', (err, res, body) => {
            expect(res.statusCode).to.equal(200);
        });
    });

    it('responds with status code 404', async () => {
        request(url + '/cart/abs', (err, res, body) => {
            expect(res.statusCode).to.equal(404);
        });
    });

    it('responds with correct result', async () => {
        request(url + '/cart/8', (err, res, body) => {
            expect(body).to.equal(`Payment methods for cart 8`);
        });
    });

    it('responds with correct headers', async () => {
        request(url + '/cart/8', (err, res, body) => {
            expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
            expect(res.headers['content-length']).to.equal(`${'Payment methods for cart 8'.length}`);
        });
    });

    it('responds with correct message', async () => {
        const opt = {
            url: "http://localhost:7865/login",
            json: true,
            body: { userName: 'lord' }
        }

        request.post(opt, (err, res, body) => {
            expect(body).to.equal(`Welcome lord`);
        });
    });

    it('responds with status code', async () => {
        const opt = {
            url: "http://localhost:7865/login",
            json: true,
            body: { userName: 'lord' }
        }

        request.post(opt, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
        });
    });

    it('responds with status code 404', async () => {
        const opt = {
            url: "http://localhost:7865/login",
            json: true,
        }

        request.post(opt, (err, res, body) => {
            expect(res.statusCode).to.equal(404);
        });
    });

    it('responds with status code', function() {
        request(url + '/available_payments', (err, res, body) => {
            expect(res.statusCode).to.equal(200);
        });
    });
});

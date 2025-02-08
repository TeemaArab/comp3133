
const { expect } = require('chai');
const calculator = require('../app/calculator');

describe('Calculator Tests', () => {
    it('add(5, 2) should return 7', () => {
        expect(calculator.add(5, 2)).to.equal(7);
    });

    it('add(5, 2) should return 8 (Fail Test)', () => {
        expect(calculator.add(5, 2)).to.equal(8);
    });

    it('sub(5, 2) should return 3', () => {
        expect(calculator.sub(5, 2)).to.equal(3);
    });

    it('sub(5, 2) should return 5 (Fail Test)', () => {
        expect(calculator.sub(5, 2)).to.equal(5);
    });

    it('mul(5, 2) should return 10', () => {
        expect(calculator.mul(5, 2)).to.equal(10);
    });

    it('mul(5, 2) should return 12 (Fail Test)', () => {
        expect(calculator.mul(5, 2)).to.equal(12);
    });

    it('div(10, 2) should return 5', () => {
        expect(calculator.div(10, 2)).to.equal(5);
    });

    it('div(10, 2) should return 2 (Fail Test)', () => {
        expect(calculator.div(10, 2)).to.equal(2);
    });
});

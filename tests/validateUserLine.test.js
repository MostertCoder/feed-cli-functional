require('dotenv').config();
const expect = require('chai').expect;

const validateUserLine = require('../functions/validateUserLine');

describe('Get File Lines', () => {
    it('should return true', () => {
        expect(validateUserLine('name follows name1, name2')).to.be.true;
    });

    it('should return false', () => {
        expect(validateUserLine('')).to.be.false;
    });

    it('should return false', () => {
        expect(validateUserLine('name name1, name 2')).to.be.false;
    });

    it('should return false', () => {
        expect(validateUserLine('follows')).to.be.false;
    });
});
const path = require('path');
const expect = require('chai').expect;

const getFileLines = require('../functions/getFileLines');

let result = [];

describe('Get File Lines', () => {
    before(() => {
        result = getFileLines(path.join(__dirname, '..', 'tests', 'test-files', 'test.txt'));
    });

    it('should return an array', () => {
        expect(result).to.be.a('array');
    });

    it('should not be empty', () => {
        expect(result).to.have.lengthOf.above(0);
    });

    it('should throw an error', () => {
        expect(() => getFileLines(path.join(__dirname, '..', 'tests', 'test-files', 'test-empty.txt'))).to.throw();
    });
});
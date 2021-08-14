const path = require('path');
const expect = require('chai').expect;

const validateFile = require('../functions/validateFile');

describe('Does File Exist', () => {
    it('should return true', () => {
        expect(validateFile(path.join(__dirname, '..', 'tests', 'test-files', 'test.txt'))).to.be.true;
    });

    it('should throw an error', () => {
        expect(() => validateFile(path.join(__dirname, '..', 'tests', 'test-files', 'no-test.txt'))).to.throw();
    });
});
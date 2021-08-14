const expect = require('chai').expect;

const parseTweetLines = require('../functions/parseTweetLines');

describe('Parse Tweet Line', () => {
    it('should return an array', () => {
        const result = parseTweetLines([
            "name> tweet"
        ]);

        expect(result).to.be.a('array');
    });

    it('every element should contain name & tweet fields', () => {
        const result = parseTweetLines([
            "name> tweet"
        ]);

        result.every(tweet => expect(tweet).to.have.all.keys('name', 'tweet'));
    });
});
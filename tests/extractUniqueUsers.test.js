const expect = require('chai').expect;

const extractUniqueUsers = require('../functions/extractUniqueUsers');

describe('Extract Unique Users', () => {
    it('should return length of 2', () => {
        const result = extractUniqueUsers([
            { name: "Dave", following: ['Sam'] },
            { name: "Sam", following: ['Dave'] },
        ]);

        expect(result).to.have.lengthOf(2);
    });

    it('should return length of 2', () => {
        const result = extractUniqueUsers([
            { name: "Dave", following: ['Sam'] },
            { name: "Sam", following: ['Dave'] },
            { name: "Sam", following: ['Dave'] },
        ]);

        expect(result).to.have.lengthOf(2);
    });

    it('should contain only unique users', () => {
        const result = extractUniqueUsers([
            { name: "Dave", following: ['Sam', 'Peter'] },
            { name: "Sam", following: ['Dave'] },
        ]);

        expect(result).to.deep.equal([
            { name: 'Dave', following: ['Sam', 'Peter'] },
            { name: 'Sam', following: ['Dave'] },
            { name: 'Peter', following: [] },
        ]);
    });

    it('should contain only unique users', () => {
        const result = extractUniqueUsers([
            { name: "Dave", following: ['Sam'] },
            { name: "Sam", following: ['Dave'] },
            { name: "Sam", following: ['Dave'] },
        ]);

        expect(result).deep.equal([
            { name: "Dave", following: ['Sam'] },
            { name: "Sam", following: ['Dave'] },
        ]);
    });

    it('should contain only unique users', () => {
        const result = extractUniqueUsers([
            { name: "Dave", following: ['Sam', 'Peter'] },
            { name: "Sam", following: ['Dave'] },
            { name: "Sam", following: ['Dave'] },
        ]);

        expect(result).deep.equal([
            { name: "Dave", following: ['Sam', 'Peter'] },
            { name: "Sam", following: ['Dave'] },
            { name: "Peter", following: [] },
        ]);
    });
});
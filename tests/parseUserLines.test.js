const expect = require('chai').expect;

const parseUserLines = require('../functions/parseUserLines');

describe('Get Users', () => {
    it('should return an array', () => {
        const result = parseUserLines([
            'name follows name'
        ]);

        expect(result).to.be.a('array');
    });

    it('every element should contain name & following fields', () => {
        const result = parseUserLines([
            'name follows name1, name2'
        ]);

        result.every(user => expect(user).to.have.all.keys('name', 'following'));
    });

    it('every following should be an array', () => {
        const result = parseUserLines([
            'name follows name1, name2'
        ]);

        result.every(user => expect(user.following).to.be.a('array'));
    });
});
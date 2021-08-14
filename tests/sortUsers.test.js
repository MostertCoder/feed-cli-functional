const expect = require('chai').expect;

const sortUsers = require('../functions/sortUsers');

describe('Sort Users Alphabetically', () => {
    it('should be sorted as A, B, C', () => {
        const result = sortUsers([
            {name: "B"},
            {name: "A"},
            {name: "C"}
        ]);

        expect(result).to.have.lengthOf(3);
        expect(result).to.deep.equal([{name: "A"}, {name: "B"}, {name: "C"}]);
    });

    it('should be sorted as a, b, c', () => {
        const result = sortUsers([
            {name: "c"},
            {name: "a"},
            {name: "b"}
        ]);

        expect(result).to.have.lengthOf(3);
        expect(result).to.deep.equal([{name: "a"}, {name: "b"}, {name: "c"}]);
    });

    it('should be sorted as A, b, C', () => {
        const result = sortUsers([
            {name: "A"},
            {name: "C"},
            {name: "b"}
        ]);

        expect(result).to.have.lengthOf(3);
        expect(result).to.deep.equal([{name: "A"}, {name: "b"}, {name: "C"}]);
    });
});
require('dotenv').config();
const expect = require('chai').expect;

const validateTweetLine = require('../functions/validateTweetLine');

describe('Get File Lines', () => {
    it('should return true', () => {
        expect(validateTweetLine('name> tweet line')).to.be.true;
    });

    it('should return false', () => {
        expect(validateTweetLine('')).to.be.false;
    });

    it('should return false', () => {
        expect(validateTweetLine('name tweet line')).to.be.false;
    });

    it('should return false', () => {
        expect(validateTweetLine('>')).to.be.false;
    });

    it('should return false', () => {
        expect(validateTweetLine('name> ywHzcgtUNEHh1S0wpn9XzgDacoCSSPjLCJfCBjsyK83QUgm2zdfW0464AMHSlCnnwfKrDYwGfcONDkVo01R1wlHXIQynEZUNkVnlLoB1H0XvsLiegnyuxPZzcZi3MYHFvdWuCjaZNqTdw40Wo9ejx4nZJ0agRKdBx2Cuw6sqlwyxHqbc0gN03pc6t04rpcrQ2LYatMeiuCmljLxQbM7Ywa6jE0EFA5OvBMRP4cIiqwOjp25CzOivL3zKsNJZtpfs0wQQwvByynuFov3bUI7lOv9QC')).to.be.false;
    });
});
const path = require('path');

const parseTweetLines = require('./parseTweetLines');
const getFileLines = require('./getFileLines');

const getTweets = () => {
    try {
        return parseTweetLines(getFileLines(path.join(__dirname, '..', 'data-files', process.env.TWEETS_FILE_NAME)));
    } catch (error) {
        console.log(error);
    }
}

module.exports = getTweets;
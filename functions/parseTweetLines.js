const validateTweetLine = require('./validateTweetLine');

const parseTweetLines = (lines) => {
    return lines.filter(validateTweetLine).map((line) => {
        const lineArr = line.split(process.env.TWEETS_DELIMITER);

        return {
            name: lineArr[0].trim(),
            tweet: lineArr[1].trim()
        }
    });
}

module.exports = parseTweetLines;
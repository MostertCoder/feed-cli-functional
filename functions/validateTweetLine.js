const validateTweetLine = (line) => {
    if (!line || line.length === 0) return false;
    if (line.indexOf(process.env.TWEETS_DELIMITER) === -1) return false;
    if (line.split(process.env.TWEETS_DELIMITER)[0].length === 0) return false;
    if (line.split(process.env.TWEETS_DELIMITER)[1].length > process.env.TWEET_MAX_LENGTH) return false;

    return true;
}

module.exports = validateTweetLine;
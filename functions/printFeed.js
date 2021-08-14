const printFeed = (users, tweets) => {
    users.forEach(user => {
        console.log(user.name);

        if (user.following.length > 0) {
            tweets.forEach(tweet => {
                if (user.name === tweet.name || user.following.includes(tweet.name)) {
                    console.log(`\t@${tweet.name}: ${tweet.tweet}`);
                }
            });
        }

        console.log('\n');
    });
}

module.exports = printFeed;
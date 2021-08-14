const extractUniqueUsers = (users) => {
    const uniqueUsers = [];

    users.forEach(user => {
        if (uniqueUsers.some(uniqueUser => uniqueUser.name === user.name)) {
            const uniqueUserIndex = uniqueUsers.findIndex(e => e.name === user.name);

            user.following.forEach(follower => {
                if (uniqueUsers[uniqueUserIndex].following.indexOf(follower) === -1) {
                    uniqueUsers[uniqueUserIndex].following.push(follower);
                }
            });
        } else {
            uniqueUsers.push({ ...user });
        }

        user.following.forEach(follower => {
            if (!uniqueUsers.some(u => u.name === follower)) {
                uniqueUsers.push({
                    name: follower,
                    following: []
                });
            }
        });
    });

    return uniqueUsers;
}

module.exports = extractUniqueUsers;
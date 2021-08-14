const extractUniqueUsers = require('./extractUniqueUsers');
const validateUserLine = require('./validateUserLine');

const parseUserLines = (lines) => {
    return extractUniqueUsers(lines.filter(validateUserLine).map((line) => {
        const lineArr = line.split(process.env.USERS_DELIMITER);

        return {
            name: lineArr[0].trim(),
            following: lineArr[1].trim().split(process.env.FOLLOWS_DELIMITER).map(followee => followee.trim())
        }
    }));
}

module.exports = parseUserLines;
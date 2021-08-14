const path = require('path');

const sortUsers = require('./sortUsers');
const parseUserLines = require('./parseUserLines');
const getFileLines = require('./getFileLines');

const getUsers = () => {
    try {
        return sortUsers(parseUserLines(getFileLines(path.join(__dirname, '..', 'data-files', process.env.USERS_FILE_NAME))));
    } catch (error) {
        console.log(error);
    }
}

module.exports = getUsers;
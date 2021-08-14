const validateUserLine = (line) => {
    if (!line || line.length === 0) return false;
    if (line.indexOf(process.env.USERS_DELIMITER) === -1) return false;
    if (line.split(process.env.USERS_DELIMITER)[0].length === 0) return false;

    return true;
}

module.exports = validateUserLine;
const fs = require("fs");
const validateFile = require('./validateFile');

const getFileLines = (filePath) => {

    validateFile(filePath);

    const data = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');

    if (data.length > 0) {
        return data.split('\n');
    } else {
        throw new Error(`File empty: ${filePath}`);
    }

}

module.exports = getFileLines;
const fs = require('fs');

const validateFile = (filePath) => {
    if (fs.existsSync(filePath)) {
        return true;
    } else {
        throw new Error(`File not found: ${filePath}`);
    }
}

module.exports = validateFile;
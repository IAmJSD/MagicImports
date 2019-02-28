// Defines the internal import dictionary if it is not already.
if (global.__MAGICIMPORTS_INTERNAL === undefined) {
    global.__MAGICIMPORTS_INTERNAL = {};
}

// Requires the path module.
const path = require("path");

// Handles the main part of the module.
module.exports = modulePath => {
    let filename = modulePath;
    if (modulePath.includes(".")) {
        filename = path.resolve(path.dirname(require.main.filename), modulePath);
    }
    const internalRes = __MAGICIMPORTS_INTERNAL[filename];
    if (internalRes !== undefined) {
        return internalRes;
    }
    const req = require(filename);
    __MAGICIMPORTS_INTERNAL[filename] = req;
    return req;
}

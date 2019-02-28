// Requires MagicImports.
const magicImports = require("magicimports");

// The file to be edited.
const toBeEdited = magicImports("./to-be-edited.js");

// Requires to-edit-it.js
require("./some-dir/to-edit-it.js");

// Asserts the result.
require("assert").strictEqual(toBeEdited.result, true);

// It worked!
console.log("It worked!");

# MagicImports
MagicImports is a library designed to remove the need for globals in node.js by making every "require" a pointer that works between files (not processes) and making the local path based off the entrypoint file. It is also pretty light as far as node.js modules go with the main part of the script only being 23 lines. This also fixes a common problem with Node where you have code like this:
```js
const someItem = require("../../../../../item.js");
```
With MagicImports, it is based off of the entrypoint file, no matter where you are in your project:
```js
const magicImports = require("magicimports");
const someItem = magicImports("./item.js");
```

## How does it work?
MagicImports works by adding a global object named `__MAGICIMPORTS_INTERNAL`. The whole idea of this object is that it is hidden from the user and only touched by MagicImports.

## How can I test/where can I find a example?
A test for importing a item from several directories/files and editing it is included. To run it, you can use `node ./import-test/` or if you want a example you can just view the folder.

## How do I reset the imports?
You can do `global.__MAGICIMPORTS_INTERNAL = {}`.

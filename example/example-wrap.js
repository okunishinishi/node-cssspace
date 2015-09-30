var cssspace = require('cssspace');

var converted = cssspace.addParent('header{background:#FFF}', 'main');
console.log(converted); // -> "main header {\n  background: #FFF;\n}"
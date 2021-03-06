cssspace
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-cssspace
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-cssspace
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-cssspace.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-cssspace/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-cssspace
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-cssspace.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-cssspace.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-cssspace
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-cssspace.svg
[bd_npm_url]: http://www.npmjs.org/package/cssspace
[bd_npm_shield_url]: http://img.shields.io/npm/v/cssspace.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/cssspace.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Rewrite each selectors in css.

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
$ npm install cssspace --save
```

<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
---------

### Wrap Each Selectors

`cssspace.wrap(css, parent)` method parses css string and add parent selector to each selectors.

```javascript
var cssspace = require('cssspace');

var converted = cssspace.addParent('header{background:#FFF}', 'main');
console.log(converted); // -> "main header {\n  background: #FFF;\n}"
```

<!-- Section from "doc/readme/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-cssspace/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [node-css](https://github.com/reworkcss/css)

<!-- Links End -->

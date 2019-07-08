[![Build Status](https://travis-ci.org/tomi77/handlebars-helpers-sprintf-js.png)](https://travis-ci.org/tomi77/handlebars-helpers-sprintf-js)
[![Coverage Status](https://img.shields.io/coveralls/tomi77/handlebars-helpers-sprintf-js.svg)](https://coveralls.io/r/tomi77/handlebars-helpers-sprintf-js)
[![Dependency Status](https://david-dm.org/tomi77/handlebars-helpers-sprintf-js.svg)](https://david-dm.org/tomi77/handlebars-helpers-sprintf-js)
[![devDependency Status](https://david-dm.org/tomi77/handlebars-helpers-sprintf-js/dev-status.svg)](https://david-dm.org/tomi77/handlebars-helpers-sprintf-js?type=dev)
[![peerDependency Status](https://david-dm.org/tomi77/handlebars-helpers-sprintf-js/peer-status.svg)](https://david-dm.org/tomi77/handlebars-helpers-sprintf-js?type=peer)

# handlebars-helpers-sprintf-js

Wrap [sprintf-js](https://www.npmjs.com/package/sprintf-js) functions to [Handlebars](http://handlebarsjs.com/) helpers

## Installation

~~~sh
npm install handlebars-helpers-sprintf-js
~~~

## Usage

### Typical

Register helpers:

~~~js
const Handlebars = require('handlebars');
const helper = require('handlebars-helpers-sprintf-js');

helper.register(Handlebars);
~~~

Use:

~~~js
const Handlebars = require('handlebars');

const template = Handlebars.compile('{{sprintf format param}}');

template({format: '%s', param: 'a'})
~~~

### ![handlebars-loader](https://www.npmjs.com/package/handlebars-loader)

In `webpack.config.js`:

~~~js
…
const helper = require('handlebars-helpers-sprintf-js');
…
                        precompileOptions: {
                            knownHelpers: helper.knownHelpers,
                        },
                        helperDirs: [
                            'handlebars-helpers-sprintf-js'
                        ],
…
~~~

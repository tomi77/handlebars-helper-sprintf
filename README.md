# handlebars-helpers-sprintf-js
Wrap sprintf-js functions to Handlebars helpers

## Installation

~~~sh
npm install handlebars-helpers-sprintf-js
~~~

## Usage

### Typical

Register helpers:

~~~js
const helper = require('handlebars-helpers-sprintf-js');

helper.register();
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

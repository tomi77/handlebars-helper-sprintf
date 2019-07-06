/*
  Handlebars helpers sprintf-js 1.0.0

  Copyright (c) 2014-2019 Tomasz Jakub Rup

  https://github.com/tomi77/handlebars-helpers-sprintf-js

  Released under the MIT license
 */
const sprintf = require('sprintf-js');

module.exports = function (format, args, options) {
    return sprintf.vsprintf(format, args);
};

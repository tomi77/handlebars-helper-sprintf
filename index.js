/*
  Handlebars helpers sprintf-js 1.0.0

  Copyright (c) 2014-2019 Tomasz Jakub Rup

  https://github.com/tomi77/handlebars-helpers-sprintf-js

  Released under the MIT license
 */
const Handlebars = require('handlebars');
const sprintf = require('./sprintf');
const vsprintf = require('./vsprintf');

module.exports = {
    register: () => {
        Handlebars.registerHelper('sprintf', sprintf);
        Handlebars.registerHelper('vsprintf', vsprintf);
    },
    knownHelpers: ['sprintf', 'vsprintf'],
    sprintf: sprintf,
    vsprintf: vsprintf
};
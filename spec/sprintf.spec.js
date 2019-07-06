const Handlebars = require('handlebars');

describe('sprintf Handlebars helper', () => {
    it('should format 1 parameter', () => {
        const template = Handlebars.compile('{{sprintf format param}}');

        expect(template({format: '%s', param: 'a'})).toBe('a');
        expect(template({format: '%2d', param: 1})).toBe(' 1');
        expect(template({format: '%.2f', param: 1})).toBe('1.00');
    });

    it('should format 2 parameters', () => {
        const template = Handlebars.compile('{{sprintf format param1 param2}}');

        expect(template({format: '%s%s', param1: 'a', param2: 'b'})).toBe('ab');
        expect(template({format: '%2d%s', param1: 1, param2: 'b'})).toBe(' 1b');
        expect(template({format: '%.2f%s', param1: 1, param2: 'b'})).toBe('1.00b');
    });
});

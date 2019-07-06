const Handlebars = require('handlebars');

describe('vsprintf Handlebars helper', () => {
    const template = Handlebars.compile('{{vsprintf format params}}');

    it('should format 1 parameter', () => {
        expect(template({format: '%s', params: ['a']})).toBe('a');
        expect(template({format: '%2d', params: [1]})).toBe(' 1');
        expect(template({format: '%.2f', params: [1]})).toBe('1.00');
    });

    it('should format 2 parameters', () => {
        expect(template({format: '%s%s', params: ['a', 'b']})).toBe('ab');
        expect(template({format: '%2d%s', params: [1, 'b']})).toBe(' 1b');
        expect(template({format: '%.2f%s', params: [1, 'b']})).toBe('1.00b');
    });
});

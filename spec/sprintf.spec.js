const Handlebars = require('handlebars');

describe('A Handlebars helpers sprintf-js', () => {
    describe('have sprintf function that', () => {
        it('should C like string formatting', () => {
            const template = Handlebars.compile('{{sprintf format value}}');
        
            expect(template({format: 'Hello %s', value: 'me'})).toBe('Hello me');
            expect(template({format: '%.1f', value: 1.22222})).toBe('1.2');
            expect(template({format: '%.1f', value: 1.17})).toBe('1.2');
            expect(template({format: '%(id)d - %(name)s', value: {id: 824, name: 'Hello World'}})).toBe('824 - Hello World');
            expect(template({format: '%(args[0].id)d - %(args[1].name)s', value: {args: [{id: 824}, {name: 'Hello World'}]}})).toBe('824 - Hello World');
        });
    });

    describe('have vsprintf function that', () => {
        it('should C like string formatting', () => {
            const template = Handlebars.compile('{{vsprintf format value}}');
        
            expect(template({format: 'Hello %s', value: ['me']})).toBe('Hello me');
            expect(template({format: '%.1f', value: [1.22222]})).toBe('1.2');
            expect(template({format: '%.1f', value: [1.17]})).toBe('1.2');
            expect(template({format: '%(id)d - %(name)s', value: [{id: 824, name: 'Hello World'}]})).toBe('824 - Hello World');
            expect(template({format: '%(args[0].id)d - %(args[1].name)s', value: [{args: [{id: 824}, {name: 'Hello World'}]}]})).toBe('824 - Hello World');
        });
    });
});

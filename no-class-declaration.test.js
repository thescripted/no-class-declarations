var rule = require("./no-class-declaration");
var RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();
ruleTester.run("noClassDeclaration", rule, {
    valid: ["function bar() { return 0 }", "baz"],
    invalid: [{
            code: "class Bar { constructor() { this.foo = 'one' }}",
            errors: [{ messageId: "noClassDeclaration" }]
    }]
});

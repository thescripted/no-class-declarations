module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Bans the use of class declarations. It's a new world.",
      url: "",
    },
    fixable: "code",
    schema: [],
    messages: {
      noClassDeclaration: "unexpected class declaration: {{ identifier }}",
    },
  },
  create: function (context) {
    return {
      ClassDeclaration: function (node) {
        context.report({
          node: node,
          messageId: "noClassDeclaration",
          data: {
            identifier: node.name,
          },
        });
      },
    };
  },
};

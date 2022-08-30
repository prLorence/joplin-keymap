function plugin(CodeMirror) {
  CodeMirror.Vim.map('J', '10j', 'normal')
  CodeMirror.Vim.map('K', '10k', 'normal')
  CodeMirror.Vim.map('kj', '<Esc>', 'insert')
  CodeMirror.Vim.map('<Space>,', '<<', 'visual')
  CodeMirror.Vim.map('<Space>.', '>>', 'visual')
};

module.exports = {
default: function(CodeMirror) {
  return {
    plugin: plugin,
    codeMirrorResources: [''],
    codeMirrorOptions: {},
    assets: function() {
      return [
      ];
    },
  }
},
}
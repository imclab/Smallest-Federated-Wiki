(function() {
  window.plugins.mathjax = {
    emit: function(div, item) {
      var typeset;
      typeset = function() {
        return window.MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
      };
      wiki.getScript('http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML', typeset);
      return div.append("<p>" + (wiki.resolveLinks(item.text)) + "</p>");
    },
    bind: function(div, item) {
      var typeset;
      typeset = function() {
        return window.MathJax.Hub.Queue(["Typeset", MathJax.Hub, div.get(0)]);
      };
      wiki.getScript('http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML', typeset);
      return div.dblclick(function() {
        return wiki.textEditor(div, item);
      });
    }
  };

}).call(this);

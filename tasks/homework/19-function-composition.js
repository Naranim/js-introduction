tasks.module("homework");

tasks.add("19-function-composition", {
  instruction: "Write a function compose(f, g) which, for given functions f:Y->Z, g:X->Y, returns function h=f∘g. You can assume that g takes only one argument.",
  js: "var compose = function(n){\n\n}",
  tests: function(){
    test('test compose', function(){
      // for testing functions see: http://api.qunitjs.com/category/assert/
      notStrictEqual(compose, undefined, 'compose is defined');
      strictEqual(typeof compose, 'function', 'compose is a function');

      var rev = function(s){ return s.split("").reverse().join(""); };
      var doub = function(s){ return s+s; };

      strictEqual(typeof compose(rev, rev), 'function', 'compose returns a function');

      strictEqual(compose(doub, rev)('abc'), 'cbacba', 'correct value for x+x, reverse(x)');
      strictEqual(compose(rev, rev)('wut'), 'wut', 'correct value for reverse(x), reverse(x)');
      strictEqual(compose(rev, rev)(2), 8, 'correct value for 2*x, 2*x');
    });
  }
});

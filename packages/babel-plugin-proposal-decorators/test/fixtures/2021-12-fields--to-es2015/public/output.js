var _init_a, _init_b, _computedKey, _init_computedKey, _dec, _dec2, _dec3;

_dec = dec
_dec2 = dec
_computedKey = 'c'
_dec3 = dec

class Foo {
  constructor() {
    babelHelpers.defineProperty(this, "a", _init_a(this));
    babelHelpers.defineProperty(this, "b", _init_b(this, 123));
    babelHelpers.defineProperty(this, _computedKey, _init_computedKey(this, 456));
  }

}

(() => {
  [_init_a, _init_b, _init_computedKey] = babelHelpers.applyDecs(Foo, [[_dec, 0, "a"], [_dec2, 0, "b"], [_dec3, 0, _computedKey]], []);
})();

var _computedKey, _dec, _dec2, _initStatic;

_dec = dec
_computedKey = 'b'
_dec2 = dec

class Foo {
  static {
    [_initStatic] = babelHelpers.applyDecs(this, [[_dec, 9, "a"], [_dec2, 9, _computedKey]], []);

    _initStatic(this);

  }
  static value = 1;

  static set a(v) {
    return this.value = v;
  }

  static set [_computedKey](v) {
    return this.value = v;
  }

}

function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define('statusBarColor', 'rgba(0,0,0,.2)');
define('toolbarBg', 'white');

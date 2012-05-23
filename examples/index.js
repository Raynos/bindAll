var bindAll = require("bindAll"),
    assert = require("assert")

var o = bindAll({
    foo: function () {
        this.bar()
    }
}, {
    bar: function () {
        assert(this === o)
    }
})

var f = o.foo
f()
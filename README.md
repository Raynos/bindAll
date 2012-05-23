# bindAll

bind all the functions to an object

## Example

    var o = bindAll({
            foo: function () {
                this.bar()
            }
        }, {
            bar: function () {
                assert(this === o)
            }
        }),
        assert = require("assert")
    
    var f = o.foo
    f()
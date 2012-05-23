var extend = require("xtend")

module.exports = bindAll

function bindAll(obj) {
    extend.apply(null, arguments) 
    Object.keys(obj).filter(isMethod).forEach(bindMethods)
    return obj
    
    function isMethod(name) {
        return obj[name] && obj[name].bind === isMethod.bind
    }
    
    function bindMethods(name) {
        obj[name] = obj[name].bind(obj)
    }
}
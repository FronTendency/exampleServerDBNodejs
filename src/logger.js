// let log = require("logger")(module);
module.exports = function(module){
    return function(){
        // console.log([module.filename]);
        let args = [module.filename].concat([].slice.call(arguments));
        console.log.apply(null,args);
    }
}
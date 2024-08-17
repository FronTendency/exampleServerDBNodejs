let log = require("logger")(module);
let db = require("./db");
db.connect();

let User = require('./user');

function run(){
let vasya = new User("Vasa");
let petya = new User("петя");

log(db.getPhrase("Run Successful"));

vasya.hello(petya)
}
if(module.parent){
    exports.run = run;
}else{
    run();
}




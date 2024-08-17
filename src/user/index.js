let phrases = require("../db");



class User{
    constructor(name){
    
    this.name = name;
    };

    hello(who){
        console.log(`${phrases.getPhrase("Hello")}, ` + who.name);
    }
}

console.log("user js is required");

module.exports = User;


// global.User = User

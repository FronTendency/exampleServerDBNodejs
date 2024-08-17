let phrases;

exports.connect = function(){
phrases = require("db/ru.json");
}

exports.getPhrase = function(name){
    try{
    if(!phrases[name]){
        throw new Error("do not exist that phrase" + name);
    }
    return phrases[name];
    }catch(err){
    console.log(err.message);
    throw err;
    }
}
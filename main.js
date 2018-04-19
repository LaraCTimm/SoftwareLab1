
console.log("Loading a module");
var mod = require("./mod");
console.log("Mod: ", mod);
console.log("Done");


var fs = require("fs");
fs.readFile("ELEN4010.txt", (err, data) => 
{
    if (err) throw err;
    console.log(data);
});


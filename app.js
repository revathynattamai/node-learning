const fs = require('fs');
fs.writeFile('names.txt', "Anirud \n" , (err) => {
    if(err) {
        console.log("err");
        return;
    } else {
        console.log("Wrote file");
    }  
});

fs.appendFile('names.txt', "Aarudh", (err) => {
    if(err) {
        console.log("err");
        return;
    } else {
        console.log("Wrote file");
    }  
});
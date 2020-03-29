const express = require('express');
const app = express();
app.listen(5000);

app.use((req, res, next) => {
    console.log("one");
    next();
});

app.use((req, res, next) => {
    console.log("two");
    next();
});

app.use((req, res, next) => {
    let body = '';
    req.on('end', () => {
        const userName = body.split('=')[1];
        if(userName) {
            req.body = { name: userName};
        }
        next();
    })
    //Get data
    req.on('data', chunk => {
        body += chunk;
    });
})

app.use((req, res, next) => {
    if(req.body) {
        return res.send('<h1>' + req.body.name + '</h1>');
    }
    res.send('<form method="POST">Name: <input type="text" name="user" /><button type="submit">Submit</button></form>');
});






/*problems encoutered
1. Cannot GET / If no route is defined

*/
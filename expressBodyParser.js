const express = require('express');
const bodyParse = require('body-parser');
const app = express();


app.use(bodyParse.urlencoded({ extended: false }));

app.post('/', (req, res, next) => {
    res.send(`<h1>${req.body.user}</h1>`)
})

app.post('/users', (req, res, next) => {
    res.send(`<h1>${req.body.user}</h1>`)
})

app.get('/', (req, res, next) => {
    res.send('<form method="POST" action="/users">Name: <input type="text" name="user" /><button type="submit">Submit</button></form>');
});

app.listen(5000);





/*problems encoutered
1. Cannot GET / If no route is defined
2.Not using body parser 
TypeError: Cannot read property 'user' of undefined

*/
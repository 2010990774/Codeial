const express = require('express');
const app = express();
const port = 8080;

// use express router
app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('view engine', './views');


app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server : ${err}`);
    }


    console.log(`Server listening on port ${port}`);
})
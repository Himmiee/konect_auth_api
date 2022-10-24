const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user-route');
const postRoutes = require('./routes/posts')

const app = express();
const port = process.env.PORT || '3050';


app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use('/users',userRoutes)
app.use('/posts',postRoutes)



app.get('/', (req, res) => {
    res.send("works lola")
})



app.listen(port, (err) => {
    if (err) {
        console.log("err", err);
    } else {
        console.log("listening", port);
    }
})
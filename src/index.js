const express = require('express');
const usersRoutes = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');

const app = express();

// app.method(path, handler);

app.use(middlewareLogRequest);
app.use(express.json());


app.use('/users', usersRoutes)



app.listen(4000, () => {
    console.log('Server is Runinng in port 4000')
})

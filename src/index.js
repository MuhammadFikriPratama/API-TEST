const express = require('express');
const app = express();
const bodyParser = require('body-parser')
// const client = require('./config/connection')
const usersRoutes = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');
const {Client} = require('pg');



app.use(middlewareLogRequest);
app.use(express.json());


const client = new Client ({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Fikriaja.18",
    database: "crud"
})

app.use(bodyParser.json())


app.use('/users', usersRoutes)

app.use('/', (req, res) => {
    client.execute('SELECT * FROM users', () => {
        if(err) {
            res.json({
                message: "connection failed"
            })
        }

        res.json({
            message: "connection success",
            data: rows, 
        })
    })
})



// client.connect(err => {
//     if(err){
//         console.log(err.message)
//     } else {
//         console.log('Connected')
//     }
// })

app.listen(4000, () => {
    console.log('Server is Runinng in port 4000')
})

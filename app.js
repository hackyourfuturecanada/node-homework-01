let express = require('express')
let app = express()


app.get('/', (req, res) => {
    res.send("Hello")
})


app.get('/add', (req, res) => {
    res.send(`${req.query.num1} + ${req.query.num2} = ${parseInt(req.query.num1) + parseInt(req.query.num2)}`)
})

app.get('/subtract', (req, res) => {
    res.send(`${req.query.num1} - ${req.query.num2} = ${parseInt(req.query.num1) - parseInt(req.query.num2)}`)
})

app.get('/multiply', (req, res) => {
    res.send(`${req.query.num1} * ${req.query.num2} = ${parseInt(req.query.num1) * parseInt(req.query.num2)}`)
})


app.listen(3000, () => console.log('server work on port 3000'));
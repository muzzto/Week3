const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World Tes!')
})

app.post('/login', (req, res) => {
  console.log(req)
  // Static data for validation
  const username = 'Muzto'
  const password = 'week3'

  if (req.body.username === '' && req.body.password === '') {
    res.json({
      status: "error",
      msg: "Username and Password cannot be empty"
    })
  }

  if (req.body.username !== username && req.body.password !== password) {
    res.json({
      status: "error",
      msg: "Incorrect Username and Password"
    })
  }

  if (req.body.username !== username) {
    res.json({
      status: "error",
      msg: "Incorrect Username"
    })
  }

  if (req.body.password !== password) {
    res.json({
      status: "error",
      msg: "Incorrect Password"
    })
  }

  res.json({status: "success"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
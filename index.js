const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined')) // Sử dụng Morgan de check HTTP request

app.get('/home', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
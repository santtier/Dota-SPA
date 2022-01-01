const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.use(function (req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port, _ => {
  console.log('Listening on http://localhost:3000')
})

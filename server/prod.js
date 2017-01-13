const path = require('path')
const express = require('express')
const compression = require('compression')

const app = express()
const PORT = process.env.PORT || 9000

app.use(compression()) // this must be first
app.use(express.static(path.join(__dirname, '../__build__')))
app.use(express.static(path.join(__dirname, '../public')))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../__build__/index.html')))

app.listen(PORT, () =>
  console.log(`${process.env.NODE_ENV || 'development'} Listening on port ${PORT}!`))

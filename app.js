const express = require('express')
const app = express() // creates an instance of an express application

app.use('/news', (req, res, next) => {
  console.log('Request Type:', req.method)
  console.log('Path:', req.path)
  res.status(200).send('This is the news page!')
  next()
})

app.use('/*/special/', (req, res, next) => {
  res.status(200).send('This is the special page!')
  next()
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => {
  console.log('server listening on port 3000')
})

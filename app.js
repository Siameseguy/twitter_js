const express = require('express')
const app = express() // creates an instance of an express application

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => {
  console.log('server listening on port 3000')
})

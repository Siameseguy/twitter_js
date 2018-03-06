const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes/index')
const app = express() // creates an instance of an express application
const morgan = require('morgan')
const path = require('path')
app.set('view engine', 'html') // have res.render work with html files
app.engine('html', nunjucks.render) // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }) // point nunjucks to the proper directory for templates

app.use(express.static(path.join(__dirname, '/public')))

app.use('/', routes)

app.listen(3000, () => {
  console.log('server listening on port 3000')
})

//app.use(morgan('combined'))

// const people = [{ name: 'Full' }, { name: 'Stacker' }, { name: 'Son' }]

// app.get('/', (req, res, next) => {
//   console.log('we made it here')
//   res.render('index.html', { title: 'Hall of Fame', people: people })
// })

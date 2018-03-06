const express = require('express')
const app = express() // creates an instance of an express application
const morgan = require('morgan');
const nunjucks = require('nunjucks');

app.use('/news', (req, res, next) => {
  console.log('Request Type:', req.method)
  console.log('Path:', req.path)
  res.status(200).send('This is the news page!')
  next()
})

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

var locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
  ]
};

app.use('/*/special/', (req, res, next) => {
  res.status(200).send('This is the special page!')
  next()
})

app.use(morgan('combined'));

app.listen(3000, () => {
  console.log('server listening on port 3000')
})

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

nunjucks.configure('views');
nunjucks.render('index.html', locals, function (err, output) {
  console.log(output);
});
app.get('/', (req, res) => res.render('index.html'));

const express = require('express')
const app = express()
const port = 3003

app.set('views', './views')
app.set('view engine', 'jade')

const videos = require('fs').readdirSync('./media').map(item => ({
  path: item,
  name: item.substr(0, item.indexOf('.'))
}))

app.get('/', (req, res) => res.render('index', { videos }))
app.use(express.static(__dirname + '/media'))
app.listen(port, () => console.log(`Serve on ${port}.`))

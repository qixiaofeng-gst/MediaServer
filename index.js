const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => res.sendFile(__dirname + '/html/index.html'))
app.use(express.static(__dirname + '/media'))
app.listen(port, () => console.log(`Serve on ${port}.`))

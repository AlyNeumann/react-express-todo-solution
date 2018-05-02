const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')
app.use(bodyParser.raw({ type: '*/*' }))

// 
let serverState = {
    itemsFirst: [],
    itemsSecond: [],
}

// I decided to use a GET request for /items
// You can make it a POST or a PUT. It doesn't matter
// Just focus on getting things working
app.get('/items', (req, res) => {
    if (req.query.which === 'second') {
        res.send(JSON.stringify(serverState.itemsSecond));
    } else {
        res.send(JSON.stringify(serverState.itemsFirst));
    }
})

app.post('/addItem', (req, res) => {
    let parsedBody = JSON.parse(req.body.toString())
    let which = parsedBody.which;
    let item = parsedBody.item;

    if (which === 'second') {
        serverState.itemsSecond = serverState.itemsSecond.concat(item)
        res.send(JSON.stringify(serverState.itemsSecond));
    } else {
        serverState.itemsFirst = serverState.itemsFirst.concat(item)
        res.send(JSON.stringify(serverState.itemsFirst));
    }
})

app.post('/reverse', (req, res) => {
    let parsedBody = JSON.parse(req.body.toString())
    let which = parsedBody.which;

    if (which === 'second') {
        serverState.itemsSecond.reverse();
        res.send(JSON.stringify(serverState.itemsSecond));
    } else {
        serverState.itemsFirst.reverse();
        res.send(JSON.stringify(serverState.itemsFirst));
    }
})

app.post('/delete', (req, res) => {
    let parsedBody = JSON.parse(req.body.toString())
    let which = parsedBody.which;

    if (which === 'second') {
        serverState.itemsSecond = []
        res.send(JSON.stringify(serverState.itemsSecond));
    } else {
        serverState.itemsFirst = []
        res.send(JSON.stringify(serverState.itemsFirst));
    }
})

app.listen(4000, () => console.log('Example app listening on port 4000!'))

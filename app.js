const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('bloc chain project')
})

app.route('/notes')
    .get((req, res) => {
        res.send('Get a note')
    })
    .post((req, res) => {
        res.send('Add a note')
    })
    .put((req, res) => {
        res.send('Update the note')
    })


app.listen(80,()=>{
    console.log("Api Server is runnig on port 80 ...")
})
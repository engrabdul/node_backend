const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello client over there!')
})

app.listen(3001, () => {
    console.log('App is running on port 3001')
})
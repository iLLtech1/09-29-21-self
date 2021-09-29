const express = require ('express')
const syncDB = require ('syncDB')

const app = express ()

app.use(express.static(join(__dirname)))


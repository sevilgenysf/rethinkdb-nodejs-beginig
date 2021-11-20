const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const r = require('rethinkdbdash')({
    servers: [
        {
            host: 'localhost',
            port: 28015
        }
    ]
});

const app = express();
app.use(cors());
const jsonParser = bodyParser.json();

app.get('/', jsonParser, async (req, res) => {
    const todoList = await r.db("test").table("person"); 
    res.send(todoList);   
});

app.listen(3400);
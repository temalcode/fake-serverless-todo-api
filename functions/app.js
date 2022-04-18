
const serverless = require('serverless-http');
const express = require('express'); 
const app = new express();
const Router = express.Router()

const dataJSON = 
[
    {
        "id": 1,
        "todo": "Bring Milk",
        "completed": true
    },
    {
        "id": 2,
        "todo": "Update Facebook profile picture",
        "completed": false
    },
    {
        "id": 3,
        "todo": "Send email to client",
        "completed": false
    },
    {
        "id": 4,
        "todo": "Notify the co-workers",
        "completed": true
    },
    {
        "id": 5,
        "todo": "Create a todo app",
        "completed": true
    },
    {
        "id": 6,
        "todo": "Repair the tap",
        "completed": true
    },
    {
        "id": 7,
        "todo": "Send email to client",
        "completed": false
    },
    {
        "id": 8,
        "todo": "Charge the phone",
        "completed": true
    },
    {
        "id": 9,
        "todo": "Repair the light in the kitchen",
        "completed": false
    },
    {
        "id": 10,
        "todo": "Delete Gmail account",
        "completed": true
    },
    {
        "id": 11,
        "todo": "Upgrade the windows version",
        "completed": true
    },
    {
        "id": 12,
        "todo": "Download antivirus software",
        "completed": true
    },
    {
        "id": 13,
        "todo": "Start a YouTube channel",
        "completed": true
    },
    {
        "id": 14,
        "todo": "Visit Jhon's house",
        "completed": false
    },
    {
        "id": 15,
        "todo": "Add water to plants",
        "completed": false
    }
]



Router.get('/', function (req, res) {
    try {
        res.json(dataJSON)
    } catch (err) {
        res.status(500).json({ mesaage: err.mesaage })
    }
})

Router.get('/::id', function (req, res) {

    try {
        res.json(dataJSON.filter(function (item) {
            return item.id == (req.params.id)
        }))
    } catch (err) {
        res.send(400).json({ message: err.mesaage })
    }
})

Router.get('/completed', function (req, res) {
    try {
        res.json(dataJSON.filter(function (item) {
            return item.completed == true
        }))
    } catch (err) {
        res.status(500).json({ mesaage: err.mesaage })
    }

})

Router.get('/notcompleted', function (req, res) {
    try {
        res.json(dataJSON.filter(function (item) {
            return item.completed == false
        }))
    } catch (err) {
        res.status(500).json({ mesaage: err.mesaage })
    }
})


app.use('/.netlify/functions/app', Router)

// this is it!
module.exports.handler = serverless(app);
const tableData = require('../db/db.json');
const fs = require('fs');
const {v4: uuidv4} = require('uuid')
const path = require('path')
const express = require('express')
const router = express.Router()


// module.exports = (router) => {
    // router.get('/api/notes', (req, res) => {
    //     res.json(tableData)
    // })
router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
})

router.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', (err) => {
            if(err) throw err;
            console.error(err)
        })
        res.json(res)
    })
    
    // router.post('/api/notes', (req, res) => {
    //     tableData.push(req.body);
    //     res.json(true);
    // })

router.post('/api/notes', (req, res) => {

        const newNote = req.body;
        newNote.id = uuidv4();
        tableData.push(newNote);
        console.log(
          `"title": "${newNote.title}", "text": "${newNote.text}"  "id": "${newNote.id}" posted to db.json`
        );

        fs.writeFile('./db/db.json', JSON.stringify(tableData), (err) => {
          if (err) throw err;
          console.log("Couldn't post new note");
        });
        console.log(tableData)
        res.json(newNote);
      });

// router.delete('/api/notes/:id', (req, res) => {
//    let id = req.params.tableData.id
// })
// }
module.exports = router

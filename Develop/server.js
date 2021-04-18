const express = require('express');
const apiRoutes = require('./routes/apiRoute')
const routes = require('./routes/routes')
const app = express();
// const router = express.Router()
const PORT = process.env.PORT || 3000;


// const tableData = require('./db/db.json')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/notes.html'));
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });

// app.get('/api/notes', (req, res) => {
//     res.json(tableData)
// })

// app.post('api/notes', (req, res) => {
//     tableData.push(req.body);
//     res.json(true);
// })

// require('./routes/apiRoute')(app)
// require('./routes/routes')(app)
app.use(express.static('public'))
app.use('/', apiRoutes)
app.use('/', routes)
// app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
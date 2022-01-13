const express = require('express');
const cors = require('cors');
const records = require('./records');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(`

    Congratuation! You are running the services!
    Now you can go to the 'localhost: 3000' 
    and submit your records in stopwatch.

  `);
});

app.get('/api/records', (req, res) => {
  res.json(records.getList());
});

app.post('/api/records', (req, res) => {
  const { name,email,avg,fastest,type } = req.body;
  const record  = records.addRecords(name,email,avg,fastest,type);
  res.json(record);
});

app.get('/api/records/:id', (req, res) => {
  const { id } = req.params;
  if(!records.contains(id)) {
    res.status(404).json({ error: `noSuchId`, message: `No Records with id ${id}` });
    return;
  }
  res.json(records.getRecords(id));
});

app.listen(PORT, () => console.log(`
  Service server started
    Note: This only provides services
    You must run a separate front end webserver to call these services

  The below url will be used by the service calls
  This is not where your webpages will show

  http://101.43.61.57:${PORT}
`));


const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello frome the server side!', app: 'DeeTours' });
});
app.post('/', (req, res) => {
  res.send('You can post to this endpoint...');
});
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

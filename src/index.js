const express = require('express');

const app = express();

app.use(express.static('src'));

app.get('*', (_, res) => {
  res.sendFile('index.html', { root: 'src' });
});

app.listen(3000, () => {
  console.log('started');
});

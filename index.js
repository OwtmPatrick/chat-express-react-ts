const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.use(express.static(path.join(__dirname, './client/build')));

app.get('/articles', (req, res) => {
	res.send({articles: [{name: 'first article'}, {name: 'one more article'}]});
});

// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});

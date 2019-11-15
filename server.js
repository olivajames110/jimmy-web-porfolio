const express = require('express');
const app = express();
app.listen(3000, () => console.log('Running at 3000'));
app.use(express.static('public'));

app.get('/test', (req, res) => {
	console.log(req);
});

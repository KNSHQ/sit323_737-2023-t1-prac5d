const express = require('express');

const app = express();

const axios = require('axios');

const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello from Service 1!');
});

app.listen(port, () => {
	console.log(`Service 1 listening at http://localhost:${port}`);
});

app.get('/service2', async (req, res) => {
	try {
		const response = await axios.get('http://service2:4000');
		res.send(response.data);
	} catch (error) {
		res.status(500).send('Error connecting to Service 2');
	}
});

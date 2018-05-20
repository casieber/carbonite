const express = require('express');
const https = require('https');
const puppeteer = require('puppeteer');
const path = require('path');
const bodyParser = require('body-parser');

const fakeCert = require('./ssl');

const dist = path.join(__dirname, 'dist');
const port = 3000;

const options = {
	key: fakeCert,
	cert: fakeCert,
	spdy: {
		protocols: ['h2', 'http/1.1'],
	},
};

puppeteer.launch().then(browser => {
	const app = express();

	app.use(bodyParser.json(), express.static(dist));

	app.post('/image', (req, res) => {
		return browser.newPage().then(page => {
			const query = Object.keys(req.body)
				.map(key => `${key}=${req.body[key]}`)
				.join('&');

			return page.goto(`https://localhost:${port}?${query}`).then(() => {
				return page.evaluate(() => window.takeImageLocal()).then(img => {
					res.send(img);
					return page.close();
				});
			});
		});
	});

	https.createServer(options, app).listen(port, () => {
		console.log(`Listening on port ${port}`);
	});
});

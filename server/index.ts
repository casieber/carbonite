import * as express from 'express';
import * as https from 'https';
import * as puppeteer from 'puppeteer';
import * as path from 'path';
import * as bodyParser from 'body-parser';

import fakeCert from './ssl';

const dist = path.join(__dirname, '../dist');
const port = 3000;

const options = {
	key: fakeCert,
	cert: fakeCert,
	spdy: {
		protocols: ['h2', 'http/1.1'],
	},
};

const toQueryPair = (rawKey: string, rawValue: string) => {
	const key = encodeURIComponent(rawKey);
	const value = encodeURIComponent(JSON.stringify(rawValue));
	return `${key}=${value}`;
};

puppeteer.launch().then(browser => {
	const app = express();

	app.use(bodyParser.json(), express.static(dist));

	app.post('/image', (req, res) => {
		return browser.newPage().then(page => {
			const query = Object.keys(req.body)
				.map(key => toQueryPair(key, req.body[key]))
				.join('&');

			return page.goto(`https://localhost:${port}?${query}`).then(() => {
				return page
					.evaluate(() => (window as any).takeImageLocal())
					.then(img => {
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

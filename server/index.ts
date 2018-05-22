import * as express from 'express';
import * as https from 'https';
import * as puppeteer from 'puppeteer';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { performance } from 'perf_hooks';

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

const stopwatch = (name: string) => {
	const start = performance.now();
	return () => {
		const end = performance.now();

		console.log(`${name}: (${start} - ${end}): ${end - start}`);
	};
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
		const imgSW = stopwatch('/image');

		const pageSW = stopwatch('newPage');
		return browser
			.newPage()
			.then(page => {
				pageSW();
				const query = Object.keys(req.body)
					.map(key => toQueryPair(key, req.body[key]))
					.join('&');

				const goToSW = stopwatch('goTo');
				return page.goto(`https://localhost:${port}?${query}`).then(() => {
					goToSW();
					const evalSW = stopwatch('evaluate');
					return page
						.evaluate(() => (window as any).takeImageLocal())
						.then(img => {
							evalSW();
							res.send(img);
							return page.close();
						});
				});
			})
			.then(() => imgSW());
	});

	https.createServer(options, app).listen(port, () => {
		console.log(`Listening on port ${port}`);
	});
});

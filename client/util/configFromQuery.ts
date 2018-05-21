import { defaultConfig } from '../constants';
import { Config } from '../types';

const queryToObj = (query: string) =>
	query.split('&').reduce((obj, pair) => {
		const [key, value] = pair.split('=');
		const decoded = decodeURIComponent(value);
		return { ...obj, [key]: decoded ? JSON.parse(decoded) : undefined };
	}, {});

export function configFromQuery(): Config {
	const search = window.location.search;

	if (!search) {
		return defaultConfig;
	}

	const query = queryToObj(search.slice(1));

	return { ...defaultConfig, ...query };
}

import { defaultConfig } from '../constants';
import { Config } from '../types';

const queryToObj = (query: string) =>
	query
		? query.split('&').reduce((obj, pair) => {
				const [key, value] = pair.split('=');
				return { ...obj, [key]: JSON.parse(decodeURIComponent(value)) };
		  }, {})
		: {};

export function configFromQuery(): Config {
	const search = window.location.search;

	if (!search) {
		return defaultConfig;
	}

	const query = queryToObj(search.slice(1));

	return { ...defaultConfig, ...query };
}

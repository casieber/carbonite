import { defaultConfig } from '../constants';
import { Config } from '../types';

const queryToObj = (query: string) =>
	query
		? query.split('&').reduce((obj, pair) => {
				const [key, value] = pair.split('=');
				return { ...obj, [key]: value ? JSON.parse(value) : undefined };
		  }, {})
		: {};

export function configFromQuery(): Config {
	const search = window.location.search;

	if (!search) {
		return defaultConfig;
	}

	const query = queryToObj(decodeURI(search.slice(1)));

	return { ...defaultConfig, ...query };
}

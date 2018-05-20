import { defaultConfig } from '../constants';
import { Config } from '../types';

const queryToObj = (query: string) =>
	query
		? query.split('&').reduce((obj, pair) => {
				const [key, value] = pair.split('=');
				return { ...obj, [key]: value };
		  }, {})
		: {};

export function configFromQuery(): Config {
	const query = queryToObj(window.location.search);

	return { ...defaultConfig, ...query };
}

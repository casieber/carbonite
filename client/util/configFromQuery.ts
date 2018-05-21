import { Config } from '../types';

const queryToObj = (query: string) =>
	query.split('&').reduce((obj, pair) => {
		const [key, value] = pair.split('=');
		const decoded = decodeURIComponent(value);
		return { ...obj, [key]: decoded ? JSON.parse(decoded) : undefined };
	}, {});

export function configFromQuery(): Config | null {
	const search = window.location.search;

	if (!search) {
		return null;
	}

	const query = queryToObj(search.slice(1)) as Config;

	return { ...query };
}

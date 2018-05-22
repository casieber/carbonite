import { ResetAction } from './types';

export function reset(): ResetAction {
	return {
		type: 'app.reset',
	};
}

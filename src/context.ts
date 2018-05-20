import { createContext } from 'react';

import { Config } from './types';

export const defaultConfig: Config = {
	backgroundColor: '#F5A623',
	theme: 'seti',
	shadowEnabled: true,
	shadowSpread: 35,
	shadowOffset: 15,
	horizontalPadding: 80,
	verticalPadding: 60,
};

const AppContext = createContext(defaultConfig);

export default AppContext;

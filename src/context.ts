import { createContext } from 'react';
import { defaultConfig } from './constants';

const AppContext = createContext(defaultConfig);

export default AppContext;

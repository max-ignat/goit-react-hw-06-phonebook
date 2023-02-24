import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';
// Создаем расширение стора чтобы добавить инструменты разработчика
const enhancer = devToolsEnhancer();

const store = createStore(rootReducer,  enhancer);

export default store;
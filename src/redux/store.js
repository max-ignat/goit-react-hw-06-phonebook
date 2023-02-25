import { createStore } from 'redux'; //! 1st
import { devToolsEnhancer } from '@redux-devtools/extension'; //!2nd
import { rootReducer } from './root-reducer'; //! 3rd
//! Создаем расширение стора чтобы добавить инструменты разработчика
const enhancer = devToolsEnhancer();

const store = createStore(rootReducer,  enhancer);

export default store;
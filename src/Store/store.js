import { createStore, compose } from 'redux';
import rootreducer from '../Reducers/reducers';

const extension = window.devToolsExtension() || ((f) => f);
const store = createStore(rootreducer, compose(extension));

// Estado global
// createStore concentra tudo ( store, actions..)
// rootreducer recebe os reducers
export default store;
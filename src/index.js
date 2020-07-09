import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions';

import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(reducer);
const { dispatch } = store;

const {
  inc,
  dec,
  rnd,
} = bindActionCreators(actions, dispatch);

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);

document
  .getElementById('inc')
  .addEventListener('click', inc);

document
  .getElementById('dec')
  .addEventListener('click', dec);

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    rnd(payload);
  });

import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './redux/reducers/rootReducer';
import Counter from './components/counter';

const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;

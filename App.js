import React from 'react';
import {Provider} from 'react-redux';
import StackNavigation from './navigations/StackNavigation';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};

export default App;

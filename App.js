import React from 'react';
import {Provider} from 'react-redux';
import StackNavigation from './src/navigations/StackNavigation';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};

export default App;

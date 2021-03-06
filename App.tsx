import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { bootstrap } from './src/bootstrap';
import { AppNavigation } from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './src/store';

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={ bootstrap }
        onFinish={ () => setIsReady(true) }
        onError={ (error) => console.log(error) }
      />
    )
  }

  return (
    <Provider store={ store }><AppNavigation /></Provider>
  );
};

export default App;

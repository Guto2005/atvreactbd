// App.tsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import Produto from './src/components/Produto';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Produto />
    </SafeAreaView>
  );
};

export default App;

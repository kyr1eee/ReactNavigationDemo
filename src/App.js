import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Navigator from './router/Navigator';
import Banner from './components/banner';
import Home from './pages/home';
import TopMenu from './components/topMenu';
class App extends PureComponent {
  render() {
    return (
      <View style={{flex: 1}}>
        <Home />
      </View>
    );
  }
}

// forget this, and find bug over half hour!!!
export default App;

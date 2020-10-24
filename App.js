import * as React from "react";
import {SafeAreaView, StatusBar, View, Text } from "react-native";
import FlatListDemo from './FlatListDemo';

const App: () => React$Node = () => {
  return ( 
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <FlatListDemo />
      </SafeAreaView>
    </>
  );
};

export default App;

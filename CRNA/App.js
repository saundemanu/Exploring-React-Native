import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView, 
  Keyboard,
} from 'react-native';

import ImageView from './components/ImageView';
import ButtonView from './components/ButtonView';
import InputView from './components/InputView'; 
import ListView from './components/ListView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
         contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}} onPress={Keyboard.dismiss}>
          <ImageView style={{flex:5}} /> 
          <ButtonView style={{flex:1}} /> 
          <InputView style={{flex:2}} />
          <ListView style ={{flex:20}} />
        </ScrollView> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F80E1'
  }
});

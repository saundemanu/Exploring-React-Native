import React from 'react'; 
import {
View, 
Text, 
TextInput, 
Alert, 
Keyboard, 
StyleSheet,
} from 'react-native';

export default class InputView extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          phrase: ''
        };
      }

      validateInput() {
        if(this.state.phrase === 'sleep is for the weak') {
          Keyboard.dismiss
          Alert.alert(
            "You're a real dev now!",
            'You entered the right phrase!',
            [
              { text: 'OK', onPress: () => console.log('OK pressed') }
            ],
            { cancelable: false }
          )
        } else {
          Keyboard.dismiss
          Alert.alert(
            'Incorrect',
            "Hint: A developer's true ideals",
            [
              { text: 'Try again', onPress: () => console.log('Try again pressed') }
            ],
            { cancelable: false }
          )
        }
      }
      render() {
        return (
          <View style={styles.inputViewContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={(phrase) => this.setState({ phrase })}
              placeholder="Enter the phrase"
              placeholderTextColor="white"
              selectionColor="white"
              underlineColorAndroid="transparent"
              value={this.state.phrase}
              onSubmitEditing={() => this.validateInput()}
            />
          </View>
        );
      } 
}


const styles = StyleSheet.create({
  inputViewContainer: {
    backgroundColor: '#4F80E1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginVertical: 50
  },
  textInput: {
    height: 50,
    width: '80%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 18,
    color: 'white'
  }
});
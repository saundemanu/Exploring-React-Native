import React from 'react'; 
import {
    Button,
    Keyboard, 
    View, 
    StyleSheet,
} from 'react-native';

const BACKGROUND_COLORS = [ "#6BE387", "#387142", "#032E52", "#549091", "#EDD298", "#D6293D", "#FF9751", "#5CD6E8", "#AFFF6B", "#E8638E", "#FFE765" ];


export default class ButtonView extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        currentColor: '#AEDBF5'
      }
    }
  
    changeBackgroundColor() {
      var color = BACKGROUND_COLORS[Math.floor(Math.random() * BACKGROUND_COLORS.length)];
  
      this.setState({ currentColor: color })
    }
  
    render() {
      const { currentColor } = this.state
  
      return (
        <View style={[styles.buttonViewContainer, { backgroundColor: currentColor }]}>
          <Button title="Change background color"
            onPress={() => this.changeBackgroundColor()}
          />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    buttonViewContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 400,
      flex: 1,
    }
  });
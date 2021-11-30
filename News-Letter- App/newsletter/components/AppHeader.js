import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Soumili's News Letter App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'lime',
  },
  text:{
    color: 'teal',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;
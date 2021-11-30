import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  Home = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Joke For The Day</Text>
        <Text style={styles.text}>
          A new species of butterfly was discovered in Brisbane. However, it
          turned out to be just an urban moth.
        </Text>
        <View>
          <TouchableOpacity style={styles2.button} onPress={this.Home}>
            <Text style={styles2.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'orange',
  },
  text: {
    color: 'black',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const styles2 = StyleSheet.create({
  button: {
    marginTop: 20,
    marginLeft: 60,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});

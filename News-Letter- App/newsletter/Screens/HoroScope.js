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
        <Text style={styles.text}>What is Horoscope?</Text>
        <Text style={styles.text}>
          A horoscope (or other commonly used names for the horoscope in English
          include natal chart, astrological chart, astro-chart, celestial map,
          sky-map, star-chart, cosmogram, vitasphere, radical chart, radix,
          chart wheel or simply chart) is an astrological chart or diagram
          representing the positions of the Sun, Moon, planets, astrological
          aspects and sensitive angles at the time of an event, such as the
          moment of a person's birth. The word horoscope is derived from the
          Greek words ōra and scopos meaning "time" and "observer".It is used as
          a method of divination regarding events relating to the point in time
          it represents, and it forms the basis of the horoscopic traditions of
          astrology.
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

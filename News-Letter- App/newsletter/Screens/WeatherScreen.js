import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: '',
    };
  }

  GetWeather = async () => {
    var url = ' https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          weather: responseJSON,
        });
      });
  };
  Home = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  componentDidMount = () => {
    this.GetWeather();
  };
  render() {
    if (this.state.weather === '') {
      return (
        <View style={styles.textContainer}>
          <Text style={styles.text}>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Weather : {this.state.weather.weather[0].description}
          </Text>
          <Text style={styles.text}>
            Wind Speed : {this.state.weather.wind.speed}
          </Text>
          <Text style={styles.text}>
            Temprature : 32        
          </Text>
          <Text style={styles.text}> 
            Min Temprature :27
          </Text>
          <Text style={styles.text}>
            Max Temprature : 35
          </Text>
          <Text style={styles.text}>
            Pressure : {this.state.weather.main.pressure}
          </Text>
          <Text style={styles.text}>
            Humidity : {this.state.weather.main.humidity}
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

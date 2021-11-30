import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Image } from 'react-native';
import AppHeader from '../components/AppHeader'


export default class HomeScreen extends React.Component {
  constructor(){
    super()
    this.state={
      like:0,
      dislike:0,
    }
  }
  likeCount=()=>{
    this.setState({like:this.state.like+1})
  }
  
  dislikeCount=()=>{
   this.setState({dislike:this.state.dislike+1})
  }

  News=()=>{
    this.props.navigation.navigate('NewsScreen')
  }
  Jokes=()=>{
    this.props.navigation.navigate('JokeScreen')
  }
   Weather=()=>{
    this.props.navigation.navigate('WeatherScreen')
  }
    Scope=()=>{
    this.props.navigation.navigate('HoroScope')
  }
  render() {
    return (
      <View>
        <AppHeader/>
        <TouchableOpacity
       
        style={styles.button}
        onPress={this.Jokes}>
        <Text
          style={styles.buttonText}>
        Read a joke</Text>
      </TouchableOpacity>
       <TouchableOpacity
       
        style={styles2.button}
        onPress={this.Scope}>
        <Text
          style={styles2.buttonText}>
        Horoscope</Text>
      </TouchableOpacity>
         <TouchableOpacity
       
        style={styles3.button}
        onPress={this.Weather}>
        <Text
          style={styles3.buttonText}>
        Weather</Text>
      </TouchableOpacity>
         <TouchableOpacity
        
        style={styles4.button}
        onPress={this.News}> 
        <Text
          style={styles4.buttonText}>
        Top News</Text>
       
      </TouchableOpacity>
        <Text style={{marginTop:20,marginLeft:120}}>Rate my app</Text>
        <Text style={{marginTop:20,marginLeft:110}}>{this.state.like}</Text>
        <Text style={{marginTop:-18,marginLeft:210}}>{this.state.dislike}</Text>

       <TouchableOpacity onPress={this.likeCount}>
  <Image style={{ marginTop:20,marginLeft:90,height:40,width:40}} source={require('../assets/thumbsup.png')}      />
  
      </TouchableOpacity>
        <TouchableOpacity onPress={this.dislikeCount}>
  
  <Image style={{ marginTop:-30,marginLeft:200,height:40,width:40}} source={require('../assets/thumbsdown.png')} />
      </TouchableOpacity>
      </View>
  
    );
  }
   
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginLeft: 60,
    borderWidth: 1,
    borderColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    backgroundColor: 'cyan',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'teal'
  }
});

const styles2 = StyleSheet.create({
  button: {
    marginTop:  20,
    marginLeft: 60,
    borderWidth: 1,
    borderColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    backgroundColor: 'cyan',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'teal'

  }
});


const styles3 = StyleSheet.create({
  button: {
    marginTop: 20,
    marginLeft: 60,
    borderWidth: 1,
    borderColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    backgroundColor: 'cyan',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'teal'

  }
});

const styles4 = StyleSheet.create({
  button: {
    marginTop: 20,
    marginLeft: 60,
    borderWidth: 1,
    borderColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    backgroundColor: 'cyan',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'teal'

  }
});


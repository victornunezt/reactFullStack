import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';


export default class helloWorld extends Component {
  constructor(props){
    super(props);
    this.state = {
      titleText: "Clica aquí",
      bodyText: "App creada por victornunezt.",
      text: '',

    };
  }
  //onPressTitle(){
    //alert('You tapped the text')
  //}
  onPressTitle = () => alert('Éste es un mensaje de alerta')
  textUser = (text) => this.setState({text})
  pressButton = () => alert('Has apretado el botón')

  render(){
    return (
      <View style={styles.container}>
        <View style = {styles.toolbar}>
          <Text style={styles.toolbarButton}>Add</Text>
          <Text style={styles.toolbarTitle}>Victor Nuñez Tarifa</Text>
          <Text style={styles.toolbarButton}>Like</Text>
        </View>
        <View style = {styles.squareOne}>
          <Text>Bienvenidos a HelloWorld, mi primera App</Text>
        </View>
        <View style = {styles.squareTwo}>
          <Text style = {styles.titleText} onPress={this.onPressTitle}> {this.state.titleText}{'\n'}{'\n'}</Text>
        </View>
        <View style = {styles.squareTwo}>
          <TextInput placeholder = "Escribe aquí" onChangeText={this.textUser} value = {this.state.text}></TextInput>
          <Text>{this.state.text}</Text>
        </View>
        <View style = {styles.squareThree}>
          <Button onPress = {this.pressButton} title= "Apreta el botón"></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection:'column',

  },
  toolbar: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'ghostwhite',
    paddingBottom: 7
  },
  toolbarButton: {
    width: 50,
    textAlign: 'center',
    fontSize: 16
  },
  toolbarTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 16
  },
  squareOne: {
    flex: 1,
    //backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  squareTwo: {
    flex: 1,
    //backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  squareThree: {
    flex: 2,
    //backgroundColor: 'steelblue',
    alignItems: 'center', //horizontally centeed
    justifyContent: 'center' //vertically centered
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

});

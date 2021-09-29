import React, { Component } from 'react';
import { Plataform, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {nome: "", resultatoText: "" };
  
  }


  obterFrase (){
    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 6);
    
    var frases = new Array ();
    frases[0] = "A vida trará coisas boas se tiveres paciência.";
    frases[1] = "O Senhor é meu Pastor e nada faltara";
    frases[2] = "Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.";
    frases[3] = "Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.";
    frases[4] = "Há pessoas que caminham pela floresta e so encherga LENHA";
    frases[5] = "Você é do tamanho do seu sonho.";

    var texto = frases[numeroAleatorio];
    alert(texto);
  //  return texto.resultatoText;
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.box}>
          <Text style={styles.title}>Biscoito da Sorte</Text>
        </View>

        <View style={styles.principal}>

          <TouchableOpacity style={styles.botton}>
            <Text style={styles.bottonText} onPress={this.obterFrase}>Como está a sua sorte hoje?</Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Fernando Barcelos</Text>
        </View>
      </View >
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#11052C',
    justifyContent: 'center',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#000',
    opacity: 0.9,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 20,
  },
  footerText: {
    color: '#fff'
  },
  title: {
    color: '#FFF',
    fontSize: 30,
  },
  box: {
    position: 'absolute',
    bottom: 696,
    backgroundColor: '#000',
    opacity: 0.9,
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
  principal: {
    width: 395,
    height: 370,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    padding: 20,
    marginBottom: 150,
  },

  form: {
    height: 40,
    width: 320,
    padding: 10,
    fontSize: 20,
    color: '#333',
    backgroundColor: 'rgba(250, 250, 250, 0)',
    borderColor: '#fff',
    borderBottomWidth: 1,
    marginTop: 20,
  },

  botton: {
    width: 320,
    padding: 20,
    fontSize: 25,
    backgroundColor: 'rgb(250,250,250)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },

  bottonText: {
    fontSize: 20,
  },

  valorResultado: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 30,
    color: 'black',
    backgroundColor: 'rgba(250, 250, 250, 0)',
    marginTop: 1,
    padding: 17,
  },

  textResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: -90,
    color: '#fff',
    backgroundColor: 'rgba(250, 250, 250, 0)',
    padding: 1,
    alignSelf: 'center',
  }

});
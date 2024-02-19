import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


function App() {

  const [biscoito, setBiscoito] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
  ];

  function quebraBiscoito() {
    let num = Math.floor(Math.random() * frases.length);

    setTextoFrase(`" ${frases[num]} "`);

    setBiscoito(require('./src/biscoitoAberto.png'));
  }

  function reiniciarBiscoito() {
    setTextoFrase('');
    setBiscoito(require('./src/biscoito.png'));
  }


  return (
    <View style={styles.conainer}>
      <Image
        source={biscoito}
        style={styles.img}
      />

      <Text style={styles.textofrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.button} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { marginTop: 15, borderColor: '#121212' }]} onPress={reiniciarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, { color: '#121212' }]}>Resetar biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230
  },
  textofrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button: {
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: "#dd7b22"
  }
})


export default App;
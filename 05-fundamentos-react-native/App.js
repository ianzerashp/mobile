import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente'
import SegundoComponente from './componentes/SegundoComponente';
import TerceiroComponente from './componentes/TerceiroComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <PrimeiroComponente />
      <SegundoComponente />
      <TerceiroComponente />
      <JavascriptComponente />

      <Perfil
        nome="Ian"
        idade={24}
        email="ianzeras@gmail.com"
      />

      <Perfil
        nome="Memphis"
        idade={31}
        email= "memphis@gmail.com"
      />

      <Perfil
        nome="Yuri Alberto"
        idade={23}
        email= "yuri@gmail.com"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
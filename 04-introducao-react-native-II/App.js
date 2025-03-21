// Imports
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

// Função que representa o componente
export default function App() {
  // Lógica do componente
  const nome = "Ian"

  function alerta() {
    alert("VAI CORINTHIANS")
  }

  // retorno dessa função com o template do que vai ser
  // renderizado na tela (JSX)
  return (
    // ScrollView permite que o conteudo vá até depois da barra de rolagem
    // não pode ser usado sozinho, tem que ter uma View dentro
    // // ele só envolve o conteudo
    <ScrollView>
      <View style={styles.container}>
        {/* comentário dentro do JSX */}
        {/*  */}
        {/* <StatusBar style="auto" /> */}
        {/* css inline */}
        <Text style={{ fontSize: 50, fontStyle: 'italic' }} >é o coringão!</Text>

        {/* css com StyleSheet */}
        <Text style={styles.textGrande}>HELLO</Text>

        <Text>{nome}</Text>
        <Button title='Enviar' onPress={alerta}></Button>
        {/* Imagem de fora com link */}
        <Image
          source={{
            uri: 'https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2024/09/Yuri-Alberto-COrinthians-x-Gremio-2507-scaled-aspect-ratio-512-320.jpg'
          }}
          style={{
            height: 300,
            width: 300
          }}
        />
        {/* Imagem de dentro do projeto */}
        <Image
          source={require('./imagens/image.png')}
          style={{
            height: 300,
            width: 300
          }}
        />
        <Image
          source={require('./imagens/image.png')}
          style={{
            height: 300,
            width: 300
          }}
        />
        <Image
          source={require('./imagens/image.png')}
          style={{
            height: 300,
            width: 300
          }}
        />
        <Image
          source={require('./imagens/image.png')}
          style={{
            height: 300,
            width: 300
          }}
        />
      </View>
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGrande: {
    fontSize: 40,
    fontWeight: 900
  }
});
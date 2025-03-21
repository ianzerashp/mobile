import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export default function App() {

// Alerta ao pressionar o botão

  function alerta(){
    alert("O palmeiras NÃO TEM MUNDIAL!!!")
  }

// Conteúdo do aplicativo

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.spacer} />
      <Text style={styles.title}>Sport Club Corinthians Paulista</Text>
      
      <Image source={{ uri: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png&h=200&w=200" }} style={styles.largeLogo} />
      
      <Text style={[styles.info, { textAlign: 'left', marginBottom: 20 }]}>
        O Sport Club Corinthians Paulista, fundado em 1º de setembro de 1910 e carinhosamente apelidado de "ENORMOSSAURO DE ITAQUERA", é um dos clubes mais vitoriosos do futebol brasileiro. O Time do Povo, que representa suas raízes, a democracia, a raça e o espírito de vencer. VAI CORINTHIANS!
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="Aperte aqui para uma verdade" onPress={alerta} color="#FFFFFF" />
      </View>
      
      <View style={styles.card}>
        <Text style={styles.info}><Text style={{fontWeight: 'bold'}}>Fundação:</Text> 1º de setembro de 1910</Text>
        <Text style={styles.info}><Text style={{fontWeight: 'bold'}}>Estádio:</Text> Neo Química Arena</Text>
        <Text style={styles.info}><Text style={{fontWeight: 'bold'}}>Títulos Brasileiros:</Text> 7</Text>
        <Text style={styles.info}><Text style={{fontWeight: 'bold'}}>Libertadores da América:</Text> 1 (2012)</Text>
        <Text style={styles.info}><Text style={{fontWeight: 'bold'}}>Mundial de Clubes:</Text> 2 (2000, 2012)</Text>
        <Text style={styles.info}><Text style={{fontWeight: 'bold'}}>Copa do Brasil:</Text> 3</Text>
        <Text style={styles.info}><Text style={{fontWeight: 'bold'}}>Paulistão:</Text> 30+</Text>
      </View>

      <Text style={styles.title}>Galeria</Text>

      <View style={styles.imageContainer}>
        <Image source={{ uri: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/08/camisa_corinthians_1-e1724771296103.png?w=1220&h=674&crop=1&quality=85" }} style={styles.image} />
        <Image source={{ uri: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/03/Yuri-Alberto-Corinthians-Palmeiras-Final-e1742166734417.jpg?w=880" }} style={styles.image} />
        <Image source={{ uri: "https://assets.goal.com/images/v3/blt66a94a2dab47b56d/getty_arena_corinthians.jpg?auto=webp&format=pjpg&width=3840&quality=60" }} style={styles.image} />
        <Image source={{ uri: "https://static.corinthians.com.br/uploads/1608038346421b3ac5c24ee992edd6087611c60dbb.png" }} style={styles.image} />
        <Image source={{ uri: "https://static.corinthians.com.br/uploads/16252647319657c1fffd38824e5ab0472e022e577e.jpg" }} style={styles.image} />
        <Image source={{ uri: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/10/depay-gol-corinthians-athletico-pr-e1729212643352.jpeg?w=1220&h=674&crop=1&quality=85" }} style={styles.image} />
      </View>
      
    </ScrollView>
  );
}

// Estilização

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000000",
  },
  spacer: {
    height: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
    textAlign: "center",
    marginTop: 40,
  },
  largeLogo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    color: "#FFFFFF",
    textAlign: "left",
  },
  card: {
    backgroundColor: "#C0C0C0",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "flex-start",
    width: '100%'
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
  },
  buttonContainer: {
    backgroundColor: "#C0C0C0",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
  },
});
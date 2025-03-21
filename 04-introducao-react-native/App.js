// Imports
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

// Função que define o componente
// Retornar o que vai ser renderizado na tela (Template feito com JSX)
export default function App() {
  // lógica do meu componente
  const nome = "Ian"
  function alerta() {
    alert("Palmeiras não tem mundial")
  }

    // retorno com o jsx
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />


      <Image 
        source={{
          uri: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png&h=200&w=200"
        }}
        
        style={{
          height: 400,
          width: 400
        }}
      />



      <Text>Texto dentro</Text>

      <Text>Bem vindo {nome}, você é gatão!</Text>

      <Text>{2 + 2}</Text>

      <Button title='Clicar' onPress={alerta}></Button>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

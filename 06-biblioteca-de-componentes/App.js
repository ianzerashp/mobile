import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Divider, Button } from 'react-native-paper'

export default function App() {

  const lista = [
    {
      titulo: "Card 1",
      descricao: "Vai Corinthians Vai Corinthians Vai Corinthians ",
      imagem: "https://picsum.photos/700"
    },
    {
      titulo: "Card 2",
      descricao: "Vai Corinthians Vai Corinthians Vai Corinthians ",
      imagem: "https://picsum.photos/700"
    },
    {
      titulo: "Card 3",
      descricao: "Vai Corinthians Vai Corinthians Vai Corinthians ",
      imagem: "https://picsum.photos/700"
    },
    {
      titulo: "Card 4",
      descricao: "Vai Corinthians Vai Corinthians Vai Corinthians ",
      imagem: "https://picsum.photos/700"
    },
  ]

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <FlatList
          horizontal
          data={lista}
          renderItem={({ item }) => (
            <Card>
              <Card.Content>
                <Title>{item.titulo}</Title>
                <Paragraph>{item.descricao}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: item.imagem }} />
            </Card>
          )}
        />

        <FlatList
          data={lista}
          renderItem={({ item }) => (
            <Card>
              <Card.Content>
                <Title>{item.titulo}</Title>
                <Paragraph>{item.descricao}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: item.imagem }} />
            </Card>
          )}
        />
      </View>
    </PaperProvider>
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
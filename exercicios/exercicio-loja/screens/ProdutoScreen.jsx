import React, { useEffect, useState, useLayoutEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Title, Text, Paragraph } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ route, navigation }) {
  const { idProduto } = route.params;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then(response => setProduto(response.data))
      .catch(error => console.error(error));
  }, [idProduto]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Produto',
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    });
  }, [navigation]);

  if (!produto) return <View style={styles.container}><Text style={styles.text}>Carregando...</Text></View>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Content>
          <Title style={styles.text}>{produto.title}</Title>
          <Paragraph style={styles.text}>{produto.description}</Paragraph>
          <Text style={styles.text}>Preço: R$ {produto.price}</Text>
          <Text style={styles.text}>Marca: {produto.brand}</Text>
          <Text style={styles.text}>Categoria: {produto.category}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 10,
    flexGrow: 1
  },
  card: {
    backgroundColor: '#1c1c1c'
  },
  text: {
    color: 'white',
    fontSize: 16
  }
});
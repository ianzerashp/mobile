import React, { useEffect, useState, useLayoutEffect } from 'react';
import { FlatList, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Card, Text, Title } from 'react-native-paper';
import axios from 'axios';

export default function ListaProdutosScreen({ route, navigation }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then(response => setProdutos(response.data.products))
      .catch(error => console.error(error));
  }, [categoria]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoria,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    });
  }, [navigation, categoria]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Produto', { idProduto: item.id })}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: item.thumbnail }} />
        <Card.Content>
          <Title style={styles.text}>{item.title}</Title>
          <Text style={styles.text}>R$ {item.price}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10
  },
  card: {
    margin: 10,
    backgroundColor: '#1c1c1c'
  },
  text: {
    color: 'white',
    fontSize: 16
  }
});
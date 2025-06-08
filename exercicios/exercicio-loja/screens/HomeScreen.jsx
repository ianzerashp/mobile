import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import axios from 'axios';
import { useLayoutEffect } from 'react';

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(response => setCategorias(response.data))
      .catch(error => console.error(error));
  }, []);

  // Ajuste do header
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home',
      headerStyle: {
        backgroundColor: 'black', // Fundo preto no header
      },
      headerTitleStyle: {
        color: 'white', // Título branco
      },
      headerTintColor: 'white', // Ícones (voltar) brancos
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Produtos', { categoria: item.slug })}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.text}>{item.name}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        keyExtractor={(item, index) => item.slug || index.toString()}
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
    padding: 20,
    height: 100,
    backgroundColor: '#1c1c1c'
  },
  text: {
    color: 'white',
    fontSize: 18
  }
});
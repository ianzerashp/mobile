import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper'

export default function TitulosScreen() {

  const titulos = [
    {
      nome: "Libertadores",
      anos: [2012]
    },
    {
      nome: "Mundial",
      anos: [2000, 2012]
    },
    {
      nome: "Copa do Brasil",
      anos: [1995, 2002, 2009]
    },
    {
      nome: "Brasileirão",
      anos: [1990, 1998, 1999, 2005, 2011, 2015, 2017]
    }
  ];

  return (
    <View style={styles.container}>
    <FlatList style={{ paddingTop: 20}}
      data={titulos}
      contentContainerStyle={{ padding: 16 }}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.titulo}>{item.nome}</Text>
            <Text style={styles.anos}>{item.anos.join(', ')}</Text>
          </View>
        </Card>
      )}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  cardContent: {
    padding: 16,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  anos: {
    fontSize: 14,
    color: '#000000',
  }
})
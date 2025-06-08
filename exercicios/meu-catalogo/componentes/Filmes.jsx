import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Filmes(props) {

  const { nome, ano, diretor, tipo, capa } = props

  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: capa
        }} style={styles.image}
      />

      <Text style={styles.descricao}>Nome: {nome}</Text>
      <Text style={styles.descricao}>Ano: {ano}</Text>
      <Text style={styles.descricao}>Diretor: {diretor}</Text>
      <Text style={styles.descricao}>Tipo: {tipo}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#808080',
    borderRadius: 0,
    padding: 10,
    marginLeft: 55,
    marginRight: 55,
    marginTop: 30,
    flex: 1,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  descricao: {
    fontSize: 20,
    fontWeight: 400,
    color: "white"
  },
  image: {
    width: 250,
    height: 350,
    marginTop: 15,
    borderRadius: 5,
    marginBottom: 20
  }
})
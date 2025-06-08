import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { Button, Card, Text, IconButton } from 'react-native-paper';
import CorinthiansService from './CorinthiansService';

export default function TituloLista({ navigation }) {

  const [titulos, setTitulos] = useState([]);

  useEffect(() => {
    buscarTitulos();
    const unsubscribe = navigation.addListener('focus', () => {
      buscarTitulos();
    });
    return unsubscribe; 
  }, [navigation]);

  async function buscarTitulos() {
    const lista = await CorinthiansService.listar('titulos');
    setTitulos(lista);
  }

  async function removerTitulo(id) {
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja excluir este título?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Excluir",
          onPress: async () => {
            await CorinthiansService.remover('titulos', id);
            buscarTitulos();
          },
          style: "destructive"
        }
      ],
      { cancelable: true }
    );
  }

  const renderItem = ({ item }) => (
    <Card style={styles.cardShadowContainer}>
      <View style={styles.cardInnerContent}>
        <TouchableOpacity onPress={() => navigation.navigate('TituloForm', item)}>
          <Card.Content style={styles.cardContent}>
            <IconButton
              icon="trophy-variant"
              color="#FFD700"
              size={36}
              style={styles.trophyIcon}
            />
            
            <View style={styles.infoContainer}>
              <Text style={styles.titleName} numberOfLines={1}>{item.nome}</Text>
              <Text style={styles.titleDetail}>Ano: {item.ano}</Text>
              <Text style={styles.titleDetail}>Tipo: {item.tipo}</Text>
              <Text style={styles.titleDetail}>Descrição: {item.descricao}</Text>
              <Text style={styles.titleDetail}>País: {item.pais}</Text>
            </View>
          </Card.Content>
        </TouchableOpacity>

        <Card.Actions style={styles.cardActions}>
          <IconButton
            icon="pencil"
            color="#FFD700"
            size={24}
            onPress={() => navigation.navigate('TituloForm', item)}
            style={styles.actionButton}
          />
          <IconButton
            icon="delete"
            color="#FF6347"
            size={24}
            onPress={() => removerTitulo(item.id)}
            style={styles.actionButton}
          />
        </Card.Actions>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Button
        style={styles.addButton}
        labelStyle={styles.addButtonLabel}
        icon='plus'
        mode='contained'
        onPress={() => navigation.navigate('TituloForm')}
      >
        Cadastrar Título
      </Button>

      <FlatList
        data={titulos}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  addButton: {
    backgroundColor: '#222',
    marginVertical: 10,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  addButtonLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardShadowContainer: {
    backgroundColor: 'transparent',
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333',
    elevation: 6,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  cardInnerContent: {
    backgroundColor: '#1A1A1A',
    borderRadius: 11,
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  trophyIcon: {
    backgroundColor: 'transparent',
    marginRight: 15,
    padding: 0,
    alignSelf: 'flex-start',
  },
  infoContainer: {
    flex: 1,
  },
  titleName: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  titleDetail: {
    color: '#FFF',
    fontSize: 14,
    opacity: 0.8,
  },
  cardActions: {
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 0,
  },
  actionButton: {
    marginHorizontal: 5,
  },
});
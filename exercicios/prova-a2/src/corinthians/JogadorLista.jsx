import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { Button, Card, Text, Avatar, IconButton } from 'react-native-paper';
import CorinthiansService from './CorinthiansService';

export default function JogadorLista({ navigation }) {

  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    buscarJogadores();
    const unsubscribe = navigation.addListener('focus', () => {
      buscarJogadores();
    });
    return unsubscribe;
  }, [navigation]);

  async function buscarJogadores() {
    const lista = await CorinthiansService.listar('jogadores');
    setJogadores(lista);
  }

  async function removerJogador(id) {
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja excluir este jogador?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Excluir",
          onPress: async () => {
            await CorinthiansService.remover('jogadores', id);
            buscarJogadores();
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
        <TouchableOpacity onPress={() => navigation.navigate('JogadorDetalhes', { id: item.id })}>
          <Card.Content style={styles.cardContent}>
            {item.imagemUri ? (
              <Avatar.Image
                size={48}
                source={{ uri: item.imagemUri }}
                style={styles.playerImage}
              />
            ) : (
              <Avatar.Icon
                size={48}
                icon="account"
                style={styles.avatar}
                color="#fff"
              />
            )}
            
            <View style={styles.infoContainer}>
              <Text style={styles.playerName} numberOfLines={1}>{item.nome}</Text>
              <Text style={styles.playerDetail}>Posição: {item.posicao}</Text>
              <Text style={styles.playerDetail}>Número: {item.numero}</Text>
            </View>
          </Card.Content>
        </TouchableOpacity>

        <Card.Actions style={styles.cardActions}>
          <IconButton
            icon="pencil"
            color="#FFD700"
            size={24}
            onPress={() => navigation.navigate('JogadorForm', item)} 
            style={styles.actionButton}
          />
          <IconButton
            icon="delete"
            color="#FF6347"
            size={24}
            onPress={() => removerJogador(item.id)}
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
        onPress={() => navigation.navigate('JogadorForm')}
      >
        Cadastrar Jogador
      </Button>

      <FlatList
        data={jogadores}
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
  avatar: {
    backgroundColor: '#333',
    marginRight: 15,
  },
  playerImage: {
    marginRight: 15,
    borderRadius: 24,
    borderColor: '#FFD700',
    borderWidth: 1,
  },
  infoContainer: {
    flex: 1,
  },
  playerName: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  playerDetail: {
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
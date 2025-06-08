import { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import { Text, Button, Avatar, IconButton } from 'react-native-paper';
import CorinthiansService from './CorinthiansService';
import { useFocusEffect } from '@react-navigation/native';

export default function JogadorDetalhes({ navigation, route }) {
  const { id } = route.params;

  const [jogador, setJogador] = useState(null);

  useFocusEffect(
    useCallback(() => {
      buscarJogadorDetalhes(id);
    }, [id])
  );

  async function buscarJogadorDetalhes(jogadorId) {
    const jogadorEncontrado = await CorinthiansService.buscar('jogadores', jogadorId);
    setJogador(jogadorEncontrado);
  }

  if (!jogador) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando detalhes do jogador...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImageBackground
        source={jogador.imagemUri ? { uri: jogador.imagemUri } : require('../../assets/corinthians-background.png')}
        style={styles.headerBackground}
        imageStyle={styles.headerImageStyle}
        blurRadius={jogador.imagemUri ? 5 : 0}
      >
        <View style={styles.overlay}>
          {jogador.imagemUri ? (
            <Avatar.Image
              size={120}
              source={{ uri: jogador.imagemUri }}
              style={styles.profileImage}
            />
          ) : (
            <Avatar.Icon
              size={120}
              icon="account-circle"
              style={styles.profileAvatarPlaceholder}
              color="#fff"
            />
          )}
          <Text style={styles.playerName}>{jogador.nome}</Text>
          <Text style={styles.playerNumber}>#{jogador.numero}</Text>
        </View>
      </ImageBackground>

      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <IconButton icon="soccer-field" color="#FFD700" size={24} />
          <Text style={styles.detailLabel}>Posição:</Text>
          <Text style={styles.detailValue}>{jogador.posicao}</Text>
        </View>

        <View style={styles.detailRow}>
          <IconButton icon="calendar" color="#FFD700" size={24} />
          <Text style={styles.detailLabel}>Nascimento:</Text>
          <Text style={styles.detailValue}>{jogador.nascimento}</Text>
        </View>

        <View style={styles.detailRow}>
          <IconButton icon="earth" color="#FFD700" size={24} />
          <Text style={styles.detailLabel}>Nacionalidade:</Text>
          <Text style={styles.detailValue}>{jogador.nacionalidade}</Text>
        </View>

        <Button
          mode="contained"
          icon="pencil"
          onPress={() => navigation.navigate('JogadorForm', jogador)}
          style={styles.editButton}
          labelStyle={styles.editButtonLabel}
        >
          Editar Jogador
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    fontSize: 18,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#000',
  },
  headerBackground: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 8,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  headerImageStyle: {
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileImage: {
    borderRadius: 60,
    borderColor: '#FFD700',
    borderWidth: 3,
    marginBottom: 10,
  },
  profileAvatarPlaceholder: {
    backgroundColor: '#333',
    marginBottom: 10,
    borderColor: '#FFD700',
    borderWidth: 3,
  },
  playerName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  playerNumber: {
    fontSize: 24,
    color: '#fff',
    opacity: 0.8,
    marginTop: 5,
    fontWeight: 'bold',
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderColor: '#333',
    borderWidth: 1,
  },
  detailLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 5,
  },
  detailValue: {
    color: '#FFD700',
    fontSize: 16,
    flex: 1,
  },
  editButton: {
    marginTop: 20,
    backgroundColor: '#000',
    borderColor: '#FFD700',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 5,
  },
  editButtonLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
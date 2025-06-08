import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, View, SafeAreaView } from 'react-native';
import { Card, Text, IconButton, Avatar, Button } from 'react-native-paper';
import CorinthiansService from './CorinthiansService';
import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import AnimatedNumbers from 'react-native-animated-numbers';

export default function Dashboard({ navigation }) {

  const [jogadoresCount, setJogadoresCount] = useState(0);
  const [jogosCount, setJogosCount] = useState(0);
  const [titulosCount, setTitulosCount] = useState(0);

  const [latestJogador, setLatestJogador] = useState(null);
  const [latestJogo, setLatestJogo] = useState(null);
  const [latestTitulo, setLatestTitulo] = useState(null);

  useFocusEffect(
    useCallback(() => {
      buscarDadosDashboard();
    }, [])
  );

  async function buscarDadosDashboard() {
    const listaJogadores = await CorinthiansService.listar('jogadores');
    const listaJogos = await CorinthiansService.listar('jogos');
    const listaTitulos = await CorinthiansService.listar('titulos');

    setJogadoresCount(listaJogadores.length);
    setJogosCount(listaJogos.length);
    setTitulosCount(listaTitulos.length);

    setLatestJogador(listaJogadores[listaJogadores.length - 1] || null);
    setLatestJogo(listaJogos[listaJogos.length - 1] || null);
    setLatestTitulo(listaTitulos[listaTitulos.length - 1] || null);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <LinearGradient
          colors={['#000000', '#111111']}
          style={styles.headerGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.appTitle}>Dashboard - App Coringão</Text>
          <Text style={styles.slogan}>Seu centro de informações do Corinthians!</Text>
        </LinearGradient>

        <View style={styles.summaryContainer}>
          <Card style={styles.summaryCard}>
            <Card.Content style={styles.summaryCardContent}>
              <IconButton icon="account-group" size={40} color="#FFD700" style={styles.summaryIcon} />
              <View style={styles.summaryTextContainer}>
                <AnimatedNumbers
                  animateToNumber={jogadoresCount}
                  fontStyle={styles.animatedNumber}
                  animationDuration={1500}
                />
                <Text style={styles.summaryLabel}>Jogadores</Text>
              </View>
            </Card.Content>
            <Card.Actions style={styles.summaryActions}>
              <Button onPress={() => navigation.navigate('Jogadores', { screen: 'JogadorLista' })}
                labelStyle={styles.viewAllButtonLabel}>Ver Todos</Button>
            </Card.Actions>
          </Card>

          <Card style={styles.summaryCard}>
            <Card.Content style={styles.summaryCardContent}>
              <IconButton icon="soccer" size={40} color="#FFD700" style={styles.summaryIcon} />
              <View style={styles.summaryTextContainer}>
                <AnimatedNumbers
                  animateToNumber={jogosCount}
                  fontStyle={styles.animatedNumber}
                  animationDuration={1500}
                />
                <Text style={styles.summaryLabel}>Jogos</Text>
              </View>
            </Card.Content>
            <Card.Actions style={styles.summaryActions}>
              <Button onPress={() => navigation.navigate('Jogos', { screen: 'JogoLista' })}
                labelStyle={styles.viewAllButtonLabel}>Ver Todos</Button>
            </Card.Actions>
          </Card>

          <Card style={styles.summaryCard}>
            <Card.Content style={styles.summaryCardContent}>
              <IconButton icon="trophy" size={40} color="#FFD700" style={styles.summaryIcon} />
              <View style={styles.summaryTextContainer}>
                <AnimatedNumbers
                  animateToNumber={titulosCount}
                  fontStyle={styles.animatedNumber}
                  animationDuration={1500}
                />
                <Text style={styles.summaryLabel}>Títulos</Text>
              </View>
            </Card.Content>
            <Card.Actions style={styles.summaryActions}>
              <Button onPress={() => navigation.navigate('Títulos', { screen: 'TituloLista' })}
                labelStyle={styles.viewAllButtonLabel}>Ver Todos</Button>
            </Card.Actions>
          </Card>
        </View>

        <Text style={styles.sectionTitle}>Destaques Recentes</Text>

        {latestJogador && (
          <Card style={styles.highlightCard}>
            <Card.Content style={styles.highlightCardContent}>
              {latestJogador.imagemUri ? (
                <Avatar.Image
                  size={60}
                  source={{ uri: latestJogador.imagemUri }}
                  style={styles.highlightAvatar}
                />
              ) : (
                <Avatar.Icon
                  size={60}
                  icon="account"
                  style={styles.highlightAvatar}
                  color="#fff"
                />
              )}
              <View style={styles.highlightInfo}>
                <Text style={styles.highlightTitle}>Último Jogador:</Text>
                <Text style={styles.highlightText} numberOfLines={1}>{latestJogador.nome}</Text>
                <Text style={styles.highlightDetail}>{latestJogador.posicao} | #{latestJogador.numero}</Text>
              </View>
            </Card.Content>
          </Card>
        )}

        {latestJogo && (
          <Card style={styles.highlightCard}>
            <Card.Content style={styles.highlightCardContent}>
              <IconButton icon="soccer-field" size={60} color="#FFD700" style={styles.highlightIcon} />
              <View style={styles.highlightInfo}>
                <Text style={styles.highlightTitle}>Último Jogo:</Text>
                <Text style={styles.highlightText} numberOfLines={1}>{latestJogo.adversario}</Text>
                <Text style={styles.highlightDetail}>{latestJogo.data} - {latestJogo.resultado}</Text>
              </View>
            </Card.Content>
          </Card>
        )}

        {latestTitulo && (
          <Card style={styles.highlightCard}>
            <Card.Content style={styles.highlightCardContent}>
              <IconButton icon="trophy-variant" size={60} color="#FFD700" style={styles.highlightIcon} />
              <View style={styles.highlightInfo}>
                <Text style={styles.highlightTitle}>Último Título:</Text>
                <Text style={styles.highlightText} numberOfLines={1}>{latestTitulo.nome}</Text>
                <Text style={styles.highlightDetail}>{latestTitulo.ano} - {latestTitulo.tipo}</Text>
              </View>
            </Card.Content>
          </Card>
        )}

        {!latestJogador && !latestJogo && !latestTitulo && (
          <Text style={styles.noDataText}>Nenhum dado cadastrado para exibir no dashboard.</Text>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    backgroundColor: '#000',
  },
  headerGradient: {
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
    marginBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  slogan: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
    opacity: 0.7,
  },

  summaryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  summaryCard: {
    width: '45%',
    marginVertical: 8,
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333',
    elevation: 6,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  summaryCardContent: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  summaryIcon: {
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  summaryTextContainer: {
    alignItems: 'center',
  },
  animatedNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
    opacity: 0.8,
  },
  summaryActions: {
    justifyContent: 'center',
    paddingBottom: 10,
  },
  viewAllButtonLabel: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
    textDecorationLine: 'underline',
    textDecorationColor: '#FFD700',
  },
  highlightCard: {
    backgroundColor: '#1A1A1A',
    marginHorizontal: 10,
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
  highlightCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  highlightAvatar: {
    marginRight: 15,
    backgroundColor: '#333',
    borderRadius: 30,
    borderColor: '#FFD700',
    borderWidth: 1,
  },
  highlightIcon: {
    marginRight: 15,
    backgroundColor: 'transparent',
    padding: 0,
  },
  highlightInfo: {
    flex: 1,
  },
  highlightTitle: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 2,
  },
  highlightText: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  highlightDetail: {
    color: '#FFF',
    fontSize: 14,
    opacity: 0.8,
  },
  noDataText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    opacity: 0.7,
  }
});
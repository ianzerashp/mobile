import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Filmes from './componentes/Filmes';
import Series from './componentes/Series';

export default function App() {
  const listaFilmes = [
    {
      "nome": "A Doce Vida",
      "ano": 1960,
      "diretor": "Federico Fellini",
      "tipo": "Drama",
      "capa": "https://i.pinimg.com/236x/f3/c6/1c/f3c61cedf30d5212ba7a6885a55c71fc.jpg"
    },
    {
      "nome": "Psicose",
      "ano": 1960,
      "diretor": "Alfred Hitchcock",
      "tipo": "Terror",
      "capa": "https://i.pinimg.com/236x/e4/84/72/e484729535437d2e79882c359111db56.jpg"
    },
    {
      "nome": "O Beijo da Mulher Aranha",
      "ano": 1985,
      "diretor": "Hector Babenco",
      "tipo": "Drama",
      "capa": "https://i.pinimg.com/236x/f3/e3/3f/f3e33fdd1dfae7368226acf14fac51ee.jpg"
    },
    {
      "nome": "Poltergeist - O Fenômeno",
      "ano": 1982,
      "diretor": "Tobe Hooper",
      "tipo": "Terror",
      "capa": "https://i.pinimg.com/236x/e2/5e/0f/e25e0f9e904895e5365b8ca7aa991076.jpg"
    }];

  const listaSeries = [
    {
      "nome": "Buffy, a Caça-Vampiros",
      "ano": 1997,
      "diretor": "Joss Whedon",
      "temporadas": 7,
      "capa": "https://i.pinimg.com/736x/5d/60/13/5d601398835d8b3e4ceae3a96850dec1.jpg"
    },
    {
      "nome": "Desperate Housewives",
      "ano": 2004,
      "diretor": "Marc Cherry",
      "temporadas": 8,
      "capa": "https://i.pinimg.com/236x/15/cc/88/15cc8856eb29f92689dd1268077db45e.jpg"
    },
    {
      "nome": "Sons of Anarchy",
      "ano": 2008,
      "diretor": "Kurt Sutter",
      "temporadas": 7,
      "capa": "https://i.pinimg.com/236x/a7/fe/ea/a7feea93b07da646f77be5d6c128eda2.jpg"
    }

  ]

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.titulo}>Filmes</Text>

        {
          listaFilmes.map(
            (filmes, index) => {
              return (
                <Filmes
                  key={index}
                  nome={filmes.nome}
                  ano={filmes.ano}
                  diretor={filmes.diretor}
                  tipo={filmes.tipo}
                  capa={filmes.capa}
                />
              )
            }
          )
        }

        <Text style={styles.titulo}>Séries</Text>

        {
          listaSeries.map(
            (series, index) => {
              return (
                <Series
                  key={index}
                  nome={series.nome}
                  ano={series.ano}
                  diretor={series.diretor}
                  temporadas={series.temporadas}
                  capa={series.capa}
                />
              )
            }
          )
        };

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    paddingTop: 60,
    fontSize: 50,
    fontWeight: 500,
    color: "#ffffff",
    textAlign: "center"
  },
});
import { useState } from 'react';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import CorinthiansService from './CorinthiansService';
import { TextInputMask } from 'react-native-masked-text';

export default function JogoForm({ navigation, route }) {

  const jogoAntigo = route.params || {};

  const [adversario, setAdversario] = useState(jogoAntigo.adversario || "");
  const [data, setData] = useState(jogoAntigo.data || "");
  const [local, setLocal] = useState(jogoAntigo.local || "");
  const [resultado, setResultado] = useState(jogoAntigo.resultado || "");
  const [competicao, setCompeticao] = useState(jogoAntigo.competicao || "");

  function validarData(data) {
    if (!data) return false;
    const partes = data.split('/');
    if (partes.length !== 3) return false;

    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const ano = parseInt(partes[2], 10);

    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) return false;
    if (dia < 1 || dia > 31) return false;
    if (mes < 1 || mes > 12) return false;
    if (ano < 1900 || ano > 2025) return false;

    return true;
  }

  async function salvar() {
    let jogo = {
      adversario,
      data,
      local,
      resultado,
      competicao,
    };

    if (!adversario || !data || !local || !resultado || !competicao) {
      alert('Preencha todos os campos!');
      return;
    }

    if (!validarData(jogo.data)) {
      alert('Data do jogo inválida! Informe no formato DD/MM/AAAA e com valores válidos.');
      return;
    }

    if (jogoAntigo.id) {
      jogo.id = jogoAntigo.id;
      await CorinthiansService.atualizar('jogos', jogo);
      alert('Jogo alterado com sucesso!');
    } else {
      await CorinthiansService.salvar('jogos', jogo);
      alert('Jogo cadastrado com sucesso!');
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'JogoLista' }],
    });
  }

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 64 : 0;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.texto} variant='titleLarge'>Informe os dados do Jogo:</Text>
          <Text style={styles.texto} variant='titleLarge'>ID JOGO: {jogoAntigo.id || 'NOVO'}</Text>

          <Text style={styles.label}>Adversário</Text>
          <TextInput
            style={styles.input}
            mode='outlined'
            placeholder='Nome do adversário'
            value={adversario}
            onChangeText={setAdversario}
            theme={{ colors: { text: '#fff', placeholder: '#fff', primary: '#fff' } }}
          />

          <Text style={styles.label}>Data</Text>
          <TextInput
            style={styles.input}
            mode='outlined'
            placeholder='Data do jogo'
            value={data}
            onChangeText={setData}
            keyboardType='numeric'
            render={(props) => (
              <TextInputMask
                {...props}
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }}
              />
            )}
            theme={{ colors: { text: '#fff', placeholder: '#fff', primary: '#fff' } }}
          />

          <Text style={styles.label}>Local</Text>
          <TextInput
            style={styles.input}
            mode='outlined'
            placeholder='Local da partida'
            value={local}
            onChangeText={setLocal}
            theme={{ colors: { text: '#fff', placeholder: '#fff', primary: '#fff' } }}
          />

          <Text style={styles.label}>Resultado</Text>
          <TextInput
            style={styles.input}
            mode='outlined'
            placeholder='Ex: 2x1, Vitória, Empate...'
            value={resultado}
            onChangeText={setResultado}
            theme={{ colors: { text: '#fff', placeholder: '#fff', primary: '#fff' } }}
          />

          <Text style={styles.label}>Competição</Text>
          <TextInput
            style={styles.input}
            mode='outlined'
            placeholder='Nome da competição'
            value={competicao}
            onChangeText={setCompeticao}
            theme={{ colors: { text: '#fff', placeholder: '#fff', primary: '#fff' } }}
          />

          <Button
            style={styles.botao}
            labelStyle={styles.textoBotao}
            mode='contained'
            onPress={salvar}
          >
            Salvar
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 20,
    backgroundColor: '#000',
  },
  container: {
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  texto: {
    color: '#fff',
    marginTop: 10
  },
  label: {
    color: '#fff',
    alignSelf: 'flex-start',
    width: '90%',
    marginLeft: '5%',
    marginTop: 10
  },
  input: {
    width: '90%',
    marginTop: 5
  },
  botao: {
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#000',
    borderColor: '#FFD700',
    borderWidth: 1,
  },
  textoBotao: {
    color: '#fff'
  }
});
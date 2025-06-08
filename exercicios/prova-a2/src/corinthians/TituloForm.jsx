import { useState } from 'react';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import CorinthiansService from './CorinthiansService';

export default function TituloForm({ navigation, route }) {

  const tituloAntigo = route.params || {};

  const [nome, setNome] = useState(tituloAntigo.nome || "");
  const [ano, setAno] = useState(tituloAntigo.ano || "");
  const [tipo, setTipo] = useState(tituloAntigo.tipo || "");
  const [descricao, setDescricao] = useState(tituloAntigo.descricao || "");
  const [pais, setPais] = useState(tituloAntigo.pais || "");

  async function salvar() {
    let titulo = {
      nome,
      ano,
      tipo,
      descricao,
      pais,
    };

    if (!nome || !ano || !tipo || !descricao || !pais) {
      alert('Preencha todos os campos!');
      return;
    }

    const anoNumero = parseInt(ano, 10);
    if (isNaN(anoNumero) || anoNumero < 1900 || anoNumero > new Date().getFullYear() + 10) {
        alert('Ano inválido! Informe um ano válido.');
        return;
    }

    if (tituloAntigo.id) {
      titulo.id = tituloAntigo.id;
      await CorinthiansService.atualizar('titulos', titulo);
      alert('Título alterado com sucesso!');
    } else {
      await CorinthiansService.salvar('titulos', titulo);
      alert('Título cadastrado com sucesso!');
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'TituloLista' }],
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
          <Text style={styles.texto} variant='titleLarge'>Informe os dados do Título:</Text>
          <Text style={styles.texto} variant='titleLarge'>ID TÍTULO: {tituloAntigo.id || 'NOVO'}</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            mode='outlined'
            placeholder='Nome do título'
            value={nome}
            onChangeText={setNome}
            theme={{ colors: { text: '#fff', placeholder: '#fff', primary: '#fff' } }}
          />

          <Text style={styles.label}>Ano</Text>
          <TextInput
            style={styles.input}
            mode='outlined'
            placeholder='Ano do título'
            value={ano}
            onChangeText={setAno}
            keyboardType='numeric'
            theme={{ colors: { text: '#fff', placeholder: '#fff', primary: '#fff' } }}
          />

          <Text style={styles.label}>Tipo</Text>
          <TextInput
            style={styles.input}
            mode='outlined'
            placeholder='Ex: Campeonato Brasileiro, Copa do Brasil...'
            value={tipo}
            onChangeText={setTipo}
            theme={{ colors: { text: '#fff', placeholder: '#fff', primary: '#fff' } }}
          />

          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={styles.input}
            mode='outlined'
            placeholder='Descrição do título'
            value={descricao}
            onChangeText={setDescricao}
            theme={{ colors: { text: '#fff', placeholder: '#fff', primary: '#fff' } }}
          />

          <Text style={styles.label}>País</Text>
          <TextInput
            style={styles.input}
            mode='outlined'
            placeholder='País onde foi conquistado'
            value={pais}
            onChangeText={setPais}
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
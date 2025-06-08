import { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Text, TextInput, IconButton } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import CorinthiansService from './CorinthiansService';
import * as ImagePicker from 'expo-image-picker';

export default function JogadorForm({ navigation, route }) {
  const jogadorAntigo = route.params || {};

  const [nome, setNome] = useState(jogadorAntigo.nome || "");
  const [posicao, setPosicao] = useState(jogadorAntigo.posicao || "");
  const [numero, setNumero] = useState(jogadorAntigo.numero || "");
  const [nascimento, setNascimento] = useState(jogadorAntigo.nascimento || "");
  const [nacionalidade, setNacionalidade] = useState(jogadorAntigo.nacionalidade || "");
  const [imagemUri, setImagemUri] = useState(jogadorAntigo.imagemUri || null);

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

  async function pickImage() {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permissão para acessar a galeria é necessária!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setImagemUri(pickerResult.assets[0].uri);
    } else {
      alert('Nenhuma imagem selecionada.');
    }
  }

  async function salvar() {
    let jogador = {
      nome,
      posicao,
      numero,
      nascimento,
      nacionalidade,
      imagemUri,
    };

    if (!jogador.nome || !jogador.posicao || !jogador.numero || !jogador.nascimento || !jogador.nacionalidade) {
      alert('Preencha todos os campos!');
      return;
    }

    if (!validarData(jogador.nascimento)) {
      alert('Data de nascimento inválida! Informe no formato DD/MM/AAAA e com valores válidos.');
      return;
    }

    if (jogadorAntigo.id) {
      jogador.id = jogadorAntigo.id;
      await CorinthiansService.atualizar('jogadores', jogador);
      alert("Jogador alterado com sucesso!");
      navigation.reset({
        index: 0,
        routes: [{ name: 'JogadorLista' }]
      });
    } else {
      await CorinthiansService.salvar('jogadores', jogador);
      alert("Jogador cadastrado com sucesso!");
      navigation.reset({
        index: 0,
        routes: [{ name: 'JogadorLista' }]
      });
    }
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
          <Text style={styles.texto} variant='titleLarge'>Informe os dados do Jogador:</Text>
          <Text style={styles.texto} variant='titleLarge'>ID: {jogadorAntigo.id || 'NOVO'}</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            mode='outlined'
            placeholder='Informe o nome'
            value={nome}
            onChangeText={setNome}
            theme={{ colors: { text: '#fff', placeholder: '#fff', primary: '#fff' } }}
          />

          <Text style={styles.label}>Posição</Text>
          <TextInput
            style={styles.input}
            mode='outlined'
            placeholder='Informe a posição'
            value={posicao}
            onChangeText={setPosicao}
            theme={{ colors: { text: '#fff', placeholder: '#fff', primary: '#fff' } }}
          />

          <Text style={styles.label}>Número</Text>
          <TextInput
            style={styles.input}
            mode='outlined'
            placeholder='Informe o número'
            value={numero}
            onChangeText={setNumero}
            keyboardType='numeric'
            theme={{ colors: { text: '#fff', placeholder: '#fff', primary: '#fff' } }}
          />

          <Text style={styles.label}>Nascimento</Text>
          <TextInput
            style={styles.input}
            mode='outlined'
            placeholder='Informe a data de nascimento'
            value={nascimento}
            onChangeText={setNascimento}
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

          <Text style={styles.label}>Nacionalidade</Text>
          <TextInput
            style={styles.input}
            mode='outlined'
            placeholder='Informe a nacionalidade'
            value={nacionalidade}
            onChangeText={setNacionalidade}
            theme={{ colors: { text: '#fff', placeholder: '#fff', primary: '#fff' } }}
          />

          <Text style={styles.label}>Foto do Jogador</Text>
          <View style={styles.imagePickerButtonShadow}>
            <TouchableOpacity onPress={pickImage} style={styles.imagePickerButtonTouchable}>
              <Button
                mode="outlined"
                onPress={pickImage}
                icon="camera"
                labelStyle={styles.imagePickerButtonText}
                style={styles.imagePickerButtonInner}
              >
                Selecionar Foto
              </Button>
            </TouchableOpacity>
          </View>

          {imagemUri && (
            <View style={styles.imagePreviewContainer}>
              <Image source={{ uri: imagemUri }} style={styles.imagePreview} />
              <IconButton
                icon="close-circle"
                color="#FF6347"
                size={24}
                onPress={() => setImagemUri(null)}
                style={styles.removeImageButton}
              />
            </View>
          )}

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
  },
  imagePickerButtonShadow: {
    width: '90%',
    marginTop: 5,
    borderRadius: 8,
    backgroundColor: 'transparent',
    elevation: 3,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  imagePickerButtonTouchable: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  imagePickerButtonInner: {
    backgroundColor: '#222',
    borderColor: '#333',
    borderWidth: 1,
  },
  imagePickerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imagePreviewContainer: {
    marginTop: 15,
    marginBottom: 10,
    width: '90%',
    alignItems: 'center',
    position: 'relative',
  },
  imagePreview: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: '#FFD700',
    borderWidth: 2,
    resizeMode: 'cover',
  },
  removeImageButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 2,
  },
});
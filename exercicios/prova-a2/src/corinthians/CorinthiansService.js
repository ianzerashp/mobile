import AsyncStorage from '@react-native-async-storage/async-storage';

async function listar(categoria) {
  const jsonValue = await AsyncStorage.getItem(`@corinthians_${categoria}`);
  return jsonValue != null ? JSON.parse(jsonValue) : [];
}

async function salvar(categoria, item) {
  item.id = new Date().getTime();
  const lista = await listar(categoria);
  lista.push(item);
  await AsyncStorage.setItem(`@corinthians_${categoria}`, JSON.stringify(lista));
}

async function buscar(categoria, id) {
  const lista = await listar(categoria);
  return lista.find(item => item.id === id);
}

async function remover(categoria, id) {
  const lista = await listar(categoria);
  const novaLista = lista.filter(item => item.id !== id);
  await AsyncStorage.setItem(`@corinthians_${categoria}`, JSON.stringify(novaLista));
}

async function atualizar(categoria, novoItem) {
  const lista = await listar(categoria);
  const novaLista = lista.map(item => item.id === novoItem.id ? novoItem : item);
  await AsyncStorage.setItem(`@corinthians_${categoria}`, JSON.stringify(novaLista));
}

export default {
  listar,
  salvar,
  buscar,
  atualizar,
  remover
};
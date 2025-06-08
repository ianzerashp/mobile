import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { Card, Avatar, Text } from 'react-native-paper'

export default function JogadoresScreen(props) {

    const { nome, numero, imagem } = props

    const jogadores = [
        {
            nome: "Yuri Alberto",
            numero: 9,
            imagem: "https://conteudo.imguol.com.br/c/esporte/ce/2024/11/04/yuri-alberto-celebra-gol-durante-corinthians-x-palmeiras-jogo-do-campeonato-brasileiro-1730767640248_v2_450x450.jpg.webp"
        },
        {
            nome: "Rodrigo Garro",
            numero: 8,
            imagem: "https://resenhaceleste.com.br/wp-content/uploads/2025/04/rodrigo-garro-meio-campista-do-corinthians-foto-instagram-1738958400-780x470.jpg"
        },
        {
            nome: "Memphis Depay",
            numero: 10,
            imagem: "https://conteudo.imguol.com.br/c/esporte/bc/2025/04/05/memphis-depay-comemora-apos-marcar-pelo-corinthians-contra-o-vasco-pelo-brasileirao-1743891934674_v2_450x450.jpg.webp"
        },
        {
            nome: "Matheuzinho",
            numero: 2,
            imagem: "https://www.gaveanews.com/wp-content/uploads/Matheuzinho-em-acao-pelo-Corinthians-640x480.webp"
        },
        {
            nome: "Hugo Souza",
            numero: 1,
            imagem: "https://otempo.scene7.com/is/image/sempreeditora/corinthians-traca-estrategia-para-retorno-antecipado-de-hugo-souza?qlt=90&wid=1200&ts=1743764480859&dpr=off"
        }
    ];

    return (
        <View style={styles.container}>

            <FlatList
                data={jogadores}
                renderItem={({ item }) => (
                    <Card style={styles.card}>
                        <View style={styles.textContainer}>
                                <Avatar.Image source={{ uri: item.imagem }} size={60} style={styles.avatar} />
                            
                                <Text style={styles.nome}>{item.numero} - {item.nome}</Text>
                            </View>
                    </Card>
                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 16,
        paddingTop: 30,
      },
      card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
      },
      avatar: {
        backgroundColor: '#000000',
        marginRight: 12,
      },
      textContainer: {
        flex: 1,
        flexDirection: "row",
      },
      nome: {
        paddingTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
      }
})
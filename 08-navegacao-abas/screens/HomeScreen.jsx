import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Paragraph, Text, Title } from 'react-native-paper'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text variant='headlineLarge' style={{ textAlign: 'center' }}>Tela de Inicio</Text>

            <Card style={{ width: '90%' }}>
                <Card.Content>
                    <Title>Um Titulo</Title>
                    <Paragraph>Vai Corinthians Vai Corinthians Vai Corinthians Vai Corinthians </Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            </Card>

            <Card style={{ width: '90%' }}>
                <Card.Content>
                    <Title>Um Titulo</Title>
                    <Paragraph>Vai Corinthians Vai Corinthians Vai Corinthians Vai Corinthians </Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            </Card>

            <Card style={{ width: '90%' }}>
                <Card.Content>
                    <Title>Um Titulo</Title>
                    <Paragraph>Vai Corinthians Vai Corinthians Vai Corinthians Vai Corinthians </Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            </Card>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'fff',
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
    }
})
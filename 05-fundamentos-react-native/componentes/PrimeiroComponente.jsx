import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function PrimeiroComponente() {

    return (
        <View>
            <Text style={styles.textoGrande}>Primeiro Componente CORINTHIANS</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    textoGrande: {
        fontSize: 40,
        fontWeight: 600
    }
})
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';










export default function ActionCards( {img, titulo, texto} = {}) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.tinyLogo} source={img} />
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.subtitulo}>{texto}</Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        width: 272,
        backgroundColor: '#06467aff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#1B0046',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.95,
        shadowRadius: 85,
        fontWeight: 'bold',
        padding: 20,
        borderRadius: 20,
    },
    titulo: {
        fontSize: 25,
        color: '#ffffffff',
        fontWeight: 'bold',
        paddingTop: 15,
        textAlign: 'center',
    },
    subtitulo: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        paddingTop: 10,
        textAlign: 'center',
    },
    tinyLogo: {
    width: 120,
    height: 120,
  },
});
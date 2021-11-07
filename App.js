import React, {useState} from "react";
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import QRCode from 'react-native-qr-generator'

const App = props => {
    const [qrText, setQrTest] = useState('')
    const [url, setUrl] = useState('https://www.zapper.com')
    return (
        <View style={styles.container}>
            <TextInput onChangeText={(text) => setQrTest(text)} value={qrText} placeholder="Generate QR Link"
                       style={styles.input}/>
            <TouchableOpacity style={styles.btn} onPress={() => setUrl(qrText)}>
                <Text style={{color: 'white'}}>Generate QR</Text>
            </TouchableOpacity>
            <QRCode size={350} value={url}/>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30
    },
    input: {
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10
    },
    btn: {
        backgroundColor: 'black',
        borderRadius: 10,
        height: 50,
        width: '100%',
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    }

})

export default App

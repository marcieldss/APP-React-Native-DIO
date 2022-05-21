
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Pressable, Linking } from 'react-native';

const colorGitHub = '#010409';
const imgGitHubProfile = 'https://avatars.githubusercontent.com/u/102620007?v=4';
const urlGitHub = 'https://github.com/marcieldss';

const App = () => {
    const IrParaGitHub = async () => {
        const res = await Linking.canOpenURL(urlGitHub);
        console.log("Verificando o Link");
        if (res) {
            console.log("Link Aprovado!");
            console.log("Abrindo Link...");
            await Linking.openURL(urlGitHub);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
            <View style={styles.content}>
                <Image acessibilityLabel="Marcelo na sala sentado no sofá"
                    style={styles.avatar}
                    source={{ uri: imgGitHubProfile }}
                />

                <Text acessibilityLabel="Nome Marcelo M S Silva"

                    style={styles.olaMundo}>MARCELO M S SILVA</Text>
                <Text acessibilityLabel="Nickname marcieldss"

                    style={styles.red}>Nickname: marcieldss</Text>
                <Text acessibilityLabel="Estudante de ADS!"
                    style={[styles.olaMundo, styles.red]}>Estudante de ADS!</Text>

                <Text acessibilityLabel="Full Stack Developer | Javascript | React Native | Node.Js | Redux | Electron..."

                    style={[styles.red, styles.olaMundo]}>       Full Stack Developer  | Javascript  |  React Native | Node.Js | Redux | Electron...</Text>
            </View>
            <Pressable onPress={IrParaGitHub} >
                <View style={styles.button}>
                    <Text style={[styles.red, styles.textButton]} >Open In GitHub</Text>
                </View>
            </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorGitHub,
        // marginTop: 50,
        flex: 1,
    },
    content: {
        alignItems: 'center',
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 3,
    },

    olaMundo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',

    },
    button: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 20,
    },
    textButton: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default App;
import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase-config";

const LoginScreen = (props: {navigation: any}) => {
    const {navigation} = props;

    const [isSignedIn, setIsSignedIn] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(isSignedIn){
            navigation.replace("Home")
        }
    }, []);

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setIsSignedIn(true);
                navigation.replace("Home");
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setIsSignedIn(true);
                navigation.replace("Home");
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={"Email"}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder={"Password"}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => {handleSignIn()}}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {handleSignUp()}}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={[styles.buttonText, styles.buttonOutlineText]}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
       justifyContent: 'center',
       flex: 1,
       alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 7,
        borderRadius: 10,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        padding: 7,
        borderColor: '#0782F9',
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
    },
});

import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {auth} from "../firebase-config";

const HomeScreen = (props: {navigation: any}) => {
    const {navigation} = props;
    
    const handleSignout = () => {
        auth.signOut().then(() => navigation.replace("Login"));
    }

    return(
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => {handleSignout()}}>
                <Text >Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({});

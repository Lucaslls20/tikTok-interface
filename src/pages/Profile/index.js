import { StyleSheet,View,Text } from "react-native";
import React from "react";

export default function Profile ()  {
return (
    <View style={styles.container}>
        <Text>Pagina perfil</Text>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
   flex:1
    }
})
import { StyleSheet,View,Text } from "react-native";
import React from "react";

export default function InBox ()  {
return (
    <View style={styles.container}>
        <Text>Pagina mensagens</Text>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
   flex:1
    }
})
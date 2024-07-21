import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./router";

export default function App() {
return(
    <NavigationContainer>
        <StatusBar translucent={true} backgroundColor={"trasparent"} barStyle='light-content' />
        <Routes/>
    </NavigationContainer>
)
}
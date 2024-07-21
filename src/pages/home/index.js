import { StyleSheet, View, Text, TouchableOpacity, StatusBar, Platform, FlatList, Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import FeedItem from "../../components/FeedItem";

export default function Home() {

    let feedItems = [
        {
            id: '1',
            video: 'https://i.imgur.com/Cnz1CPK.mp4',
            name: '@sujeitoprogramador',
            description: 'Criando o ShortDev do zero com RN',
        },
        {
            id: '2',
            video: 'https://i.imgur.com/E0tK2bY.mp4',
            name: '@henriquesilva',
            description: 'Fala turma, estou aprendendo React Native com sujeito programador',
        },
        {
            id: '3',
            video: 'https://i.imgur.com/mPFvFyX.mp4',
            name: '@sujeitoprogramador',
            description: 'Aprendendo a trabalhar com Drag and Drop no React Native',
        }
    ];

    const [showItem, setShowItem] = useState(feedItems[0]);
    const onViewRef = useRef(({ viewableItems }) => {
        if (viewableItems && viewableItems.length > 0) {
            setShowItem(feedItems[viewableItems[0].index]);
        }
    });

    const { height: heightScreen } = Dimensions.get('screen');

    return (
        <View style={styles.container}>
            <View style={styles.labels}>
                <TouchableOpacity>
                    <Text style={[styles.labelsText, { color: '#DDD' }]}>Seguindo</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.labelsText, { color: '#FFF' }]}>Para você</Text>
                    <View style={styles.indicator}></View>
                </TouchableOpacity>
            </View>
            <FlatList
                data={feedItems}
                renderItem={({ item }) => <FeedItem data={item} currentVisibleItem={showItem} />}
                onViewableItemsChanged={onViewRef.current}
                snapToAlignment="center"
                snapToInterval={heightScreen}
                scrollEventThrottle={200}
                decelerationRate={"fast"}
                viewabilityConfig={{
                    waitForInteraction: false,
                    viewAreaCoveragePercentThreshold: 100
                     /* 100 significa que o item deve estar totalmente visivel na tela ou cobrir toda a tela para 
    contar como visivel */
                }}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    labels: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        position: 'absolute',
        top: 6,
        left: 0,
        right: 0,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 5 : 55,
        zIndex: 99
    },
    labelsText: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 2
    },
    indicator: {
        backgroundColor: '#FFF',
        width: 32,
        height: 2,
        alignSelf: 'center'
    }
});

import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Pressable, Dimensions, View, Text, TouchableOpacity, Platform } from "react-native";
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FeedItem({ data, currentVisibleItem }) {
    const video = useRef(null);
    const { height: heightScreen } = Dimensions.get('screen');
    const [status, setStatus] = useState({});

    useEffect(() => {
        if (currentVisibleItem?.id === data?.id) {
            video.current?.play();
        } else {
            video.current?.pause();
        }
    }, [currentVisibleItem]);

    function handlePlayer() {
        status.isPlaying ? video.current?.pause() : video.current?.play();
    }

    return (
        <Pressable onPress={handlePlayer}>
            <View style={[styles.info, { bottom: 110 }]}>
                <Text style={styles.name}>{data?.name}</Text>
                <Text style={styles.description} numberOfLines={2}>{data?.description}</Text>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.actionButton}>
                    <Icon name='heart' size={35} color={'#FFF'} />
                    <Text style={styles.actionText}>30.3k</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Icon name='comment' size={35} color={'#FFF'} />
                    <Text style={styles.actionText}>13.3k</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Icon name='bookmark' size={35} color={'#FFF'} />
                </TouchableOpacity>
            </View>
            <Video
                ref={video}
                source={{ uri: data.video }}
                style={styles.video}
                resizeMode="cover"
                repeat
                paused={currentVisibleItem?.id !== data?.id}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: 300,
    },
    info: {
        position: 'absolute',
        zIndex: 99,
        left: 8,
        padding: 8
    },
    name: {
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 4,
        textShadowColor: 'rgba(0, 0, 0, 0.60)',
        textShadowRadius: 8
    },
    description: {
        color: '#FFF',
        marginRight: 24,
        textShadowColor: 'rgba(0, 0, 0, 0.20)',
        textShadowRadius: 8
    },
    actions: {
        position: 'absolute',
        zIndex: 99,
        right: 8,
        bottom: Platform.OS === 'android' ? 120 : 170,
        gap: 8
    },
    actionButton: {
        alignItems: 'center'
    },
    actionText: {
        textAlign: 'center',
        color: '#FFF',
        textShadowColor: 'rgba(0, 0, 0, 0.20)',
        textShadowRadius: 8
    }
});

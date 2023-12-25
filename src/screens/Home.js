import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'

import Stories from '../components/stories/Stories'
import Share from '../components/share/Share';
import Posts from '../components/Posts/Posts';

import { Platform, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from '@rneui/base';


const Home = ({ navigation }) => {
    //#FF69B4 Hot pink
    const [emojis] = useState(["🎉", "😎", "😇", "😍", "😘", "🪐", "😜", "⚡️", "🎵"])
    const [randomEmoji, setRandomEmoji] = useState(emojis[0]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "",
            titleVisible: false,
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: { color: "#FF69B4" },
            headerTintColor: "black",
            headerLeft: () => {
                return (

                    <View style={{ marginLeft: 20, flexDirection: "row", justifyContent: 'space-between' }}>

                        <Text h3 style={{ color: '#FF69B4', fontWeight: "bold", fontSize: 20, }}>
                            B-RING {randomEmoji}
                        </Text>

                    </View>
                )


            },
            headerRight: () => {
                return (

                    <View style={{ marginRight: 20, flexDirection: "row", justifyContent: 'space-between' }}>

                        <TouchableOpacity
                            onPress={() => (navigation.navigate('Search', { transition: 'horizontal' }))}

                        >
                            <Icon
                                name='search'
                                color="#FF69B4"
                                type="font-awesome"
                                style={{ transform: [{ rotateY: '180deg' }] }}
                            />
                        </TouchableOpacity>

                        <View
                            style={{ marginLeft: 6 }}
                        >
                            <TouchableOpacity
                                onPress={() => (navigation.navigate('Reels Screen', { transition: 'horizontal' }))}

                            >
                                <Icon
                                    name='film'
                                    type='font-awesome-5'
                                    color='#FF69B4'
                                />
                            </TouchableOpacity>
                        </View>


                    </View>
                )


            }
        })
        const intervalId = setInterval(() => {
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            setRandomEmoji(randomEmoji);
        }, 4000);
        return () => clearInterval(intervalId);



    }, [navigation, randomEmoji])
    return (
        <View style={styles.container}>
            <ScrollView >
                <Stories navigation={navigation} />
                <View style={{marginTop: 16, marginBottom: 36}}>
                    <Posts />
                    <Posts />
                </View>

            </ScrollView>



        </View>
    )
}

export default Home



const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#FCCDE5',
        flex: 1,
        justifyContent: "space-between",
        height: "auto"


    }
})
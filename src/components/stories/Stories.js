import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Button, Image, Icon } from '@rneui/base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const Stories = ({ navigation }) => {

    const storiesData = [
        {
            id: 1,
            name: "Steve",
            img: "https://firebasestorage.googleapis.com/v0/b/bring-chat-a93a6.appspot.com/o/images1666208581479-IMG_9492.JPG?alt=media&token=551349de-b807-41f8-8017-46743ad5ead6",
            storyStatus: 'Notseen'
        },
        {
            id: 2,
            name: "Thomas",
            img: "https://firebasestorage.googleapis.com/v0/b/bring-chat-a93a6.appspot.com/o/images1666082915915-IMG_0007.JPG?alt=media&token=442deeca-d3da-4d3e-99d6-209d1dc279c5",
            storyStatus: 'Notseen'

        },
        {
            id: 3,
            name: "Dua_Lipa",
            img: "https://firebasestorage.googleapis.com/v0/b/bring-chat-a93a6.appspot.com/o/images1669562978709-IMG_0011.JPG?alt=media&token=551df61b-5235-4023-95bd-d19445bee911",
            storyStatus: 'notSeen'

        },
        {
            id: 4,
            name: "John Doe",
            img: "https://firebasestorage.googleapis.com/v0/b/bring-chat-a93a6.appspot.com/o/images1666293014459-IMG_0010.JPG?alt=media&token=820b5296-86ab-46e1-829f-611b786cb81b",
            storyStatus: 'notSeen'

        },
        {
            id: 4,
            name: "Duck!",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            storyStatus: 'notSeen'

        },
        {
            id: 5,
            name: "JohnWick",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            storyStatus: 'seen'

        },
        {
            id: 6,
            name: "JohnWick",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            storyStatus: 'notSeen'

        },
        {
            id: 7,
            name: "JohnWick",
            img: "https://firebasestorage.googleapis.com/v0/b/bring-chat-a93a6.appspot.com/o/images1666082915915-IMG_0007.JPG?alt=media&token=442deeca-d3da-4d3e-99d6-209d1dc279c5",
            storyStatus: 'notSeen'

        },
    ];

    return (

        <View style={styles.stories}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
                <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity
                        style={{ opacity: 0.5 }}
                    >

                        <View style={styles.storyNew}

                        >
                            <View style={{

                                alignItems: "center",
                                justifyContent: 'center'
                            }}>
                                <Image style={styles.storyImage}

                                    source={{
                                        uri: 'https://firebasestorage.googleapis.com/v0/b/bring-chat-a93a6.appspot.com/o/images1666292477856-IMG_0009.JPG?alt=media&token=21dc39c1-5566-45b3-8352-9110f67165ba'
                                    }}

                                />
                                <View style={{ position: 'absolute' }}>

                                    <Icon
                                        name="add"
                                        color='white'
                                        size={40}
                                        type='ionion'
                                    />
                                </View>

                            </View>

                        </View>


                    </TouchableOpacity>

                    <Text>
                        Add Story
                    </Text>
                </View>
                {
                    storiesData.map(story => (
                        story.storyStatus == "seen" ? (
                            <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity
                                    onPress={() => { navigation.navigate('Reels Screen') }}
                                >

                                    <View style={styles.storyNew} key={story.id}>
                                        <Image style={styles.storyImage}
                                            source={{ uri: story.img }}
                                        />
                                    </View>

                                </TouchableOpacity>
                                <Text>
                                    {story.name}
                                </Text>
                            </View>


                        ) : (
                            <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                       
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('Reels Screen') }}

                            >
                                <View style={styles.story} key={story.id}>
                                    <Image style={styles.storyImage}
                                        source={{ uri: story.img }}
                                    />
                                </View>

                            </TouchableOpacity>
                            <Text>
                            {story.name}
                                </Text>
                            </View>
                        )


                    ))
                }

            </ScrollView>

        </View>

    )
}

export default Stories

const styles = StyleSheet.create({
    stories: {
        display: 'flex',
        gap: 10, //check
        height: 100,
        marginBottom: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    storyNew: {
        display: 'flex',
        borderRadius: 999,
        width: 70,
        height: 70,
        overflow: 'hidden',
        position: 'relative',
        margin: 5,


    },
    story: {
        display: 'flex',
        borderRadius: 999,
        width: 70,
        height: 70,
        overflow: 'hidden',
        position: 'relative',
        margin: 5,
        borderWidth: 3,
        borderColor: 'red',
        //above  red is working
        // backgroundColor: 'hsl(195, 100%, 50%',

    },
    storyImage: {
        width: 70,
        height: 70,
    },
    storyTextSpan: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: 'black',


    },
    storyButton: {
        position: 'absolute',
        bottom: 40,
        left: 10,
        color: 'white',
        backgroundColor: '#5271ff',
        borderRadius: 50,
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
})
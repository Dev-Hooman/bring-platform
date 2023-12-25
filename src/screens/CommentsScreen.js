import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Input, Icon } from '@rneui/base'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

import { ScrollView } from 'react-native-gesture-handler';
import CommentList from '../components/comments/CommentList';

const CommentsScreen = ({ navigation, route }) => {
    const {id, commentingUsername} = route.params;

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
                            Commenting {commentingUsername}
                        </Text>

                    </View>
                )


            },

        })

    }, [])

    const comments = [
        {
            id: 1,
            username: "Xavier",
            comment: "I Love It great work Maria...❤️",
            date: '1/1/19',
            heart: 8
        },
        {
            id: 2,
            username: "Aunt May",
            comment: "Looking really nice Maria",
            date: '1/1/19'
            ,
            heart: 3
        },
        {
            id: 3,
            username: "Peter Parker",
            comment: "yooo I am Spidey, hehe boiiii 😈",
            date: '1/1/19'
            ,
            heart: 5
        },
        {
            id: 4,
            username: "Jamal Afridi",
            comment: "good morning, give me your number ",
            date: '1/1/19'
            ,
            heart: 14
        },
        {
            id: 5,
            username: "Asad",
            comment: "Lameeeeee!!!",
            date: '1/1/19'
            ,
            heart: 55
        },



    ]

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='white' barStyle='light-content' />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
                keyboardVerticalOffset={90}
            >

                {/* <Text style={{ color: 'black', fontSize: 30, alignSelf: 'flex-start', margin: 10 }}>
                    Comments
                </Text> */}

                <View
                    style={{ flex: 1, flexDirection: 'column', margin: 20, justifyContent: 'flex-end' }}>

                    <View
                        style={{ flex: 1 }}
                    >
                        <ScrollView
                            style={{ height: '100%' }}
                        >

                            {
                                comments?.map(({ id, username, comment, heart}) => (

                                    <CommentList key={id} id={id} username={username} comment={comment} heart={heart}/>

                                ))
                            }
                        </ScrollView>

                    </View>




                    <View
                        style={{ alignSelf: 'flex-end' }}
                    >
                        <Input
                            // onLayout={()=> inputRef.current.focus()}
                            // ref={inputRef}
                            style={styles.commentInput}
                            placeholder='comment...'
                            editable={true}
                            onChangeText={() => { }}
                            placeholderTextColor="black"

                            inputContainerStyle={{
                                borderWidth: 0,
                                borderColor: "transparent",
                                width: '100%',
                            }}
                            rightIcon={
                                <TouchableOpacity>
                                    <Icon
                                        name="comment"
                                        color='black'
                                        type="font-awesome"
                                    // style={{transform: [{rotateY: '180deg'}]}}
                                    />

                                </TouchableOpacity>

                            }
                        />

                    </View>




                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default CommentsScreen

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: "space-between"


    },
    commentInput: {
        borderColor: 'transparent',
        backgroundColor: '#ECECEC',
        padding: 10,
        color: 'black',
        borderRadius: 30
    },

})
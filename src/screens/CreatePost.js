import React from "react"
import { View, StyleSheet, SafeAreaView } from "react-native"
import Share from "../components/share/Share"

const CreatePost = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.createPostContainer}>
                <Share />

            </View>
        </SafeAreaView>
    )
}

export default CreatePost

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCCDE5',
    },
    createPostContainer :{
        marginTop: 24
    }
})

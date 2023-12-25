import { StyleSheet, Text, View } from 'react-native'
import { Button, Image, Icon, Input } from '@rneui/base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapImg from '../../assets/icons/map.png'


const maps = Image.resolveAssetSource(MapImg).uri;


const Share = () => {
    return (
        <View style={styles.share}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image style={styles.topImg}

                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/bring-chat-a93a6.appspot.com/o/images1666292477856-IMG_0009.JPG?alt=media&token=21dc39c1-5566-45b3-8352-9110f67165ba'
                        }}

                    />
                    <Input
                        inputContainerStyle={{
                            borderWidth: 0,
                            borderColor: "#FF69B4",
                            padding: 20,
                            paddingLeft: 10,
                            paddingRight: 5,
                            width: '80%',
                            color: '#FF69B4',

                        }}
                        multiline={true}
                        numberOfLines={4}
                        placeholder="Whats on your mind?" />
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomLeft}>
                        <TouchableOpacity >
                            <View >
                                <Icon
                                    name="image"
                                    color='#FF69B4'
                                    size={30}
                                    type='fontawesome'
                                />
                                <Text style={styles.bottomLeftSpan}>Add Image</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View >
                                <Icon
                                    name="location-pin"
                                    color='#FF69B4'
                                    size={30}
                                    type='fontawesome'
                                />
                                <Text style={styles.bottomLeftSpan}>Add Place</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View >
                                <Icon
                                    name="people"
                                    color='#FF69B4'
                                    size={30}
                                    type='fontawesome'
                                />
                                <Text style={styles.bottomLeftSpan}>Tag Friends</Text>
                            </View>
                        </TouchableOpacity>

                    </View>


                    <View style={styles.bottomRight}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ color: 'white' }}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Share

const styles = StyleSheet.create({

    share: {
        shadowColor: 'rgba(0, 0, 0, 0.38)',
        shadowOffset: { width: 0, height: 25 },
        shadowOpacity: -10,
        shadowRadius: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        color: '#FF69B4',
        marginBottom: 30,
        

    },
    container: {
        padding: 20
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    topImg: {
        width: 40,
        height: 40,
        borderRadius: 50,
        objectFit: 'cover'
    },
    topInput: {

    },
    hr: {
        margin: 20,
        marginTop: 0,
        borderWidth: 0,
        height: 0.5,
        backgroundColor: 'purple',
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10

    },
    bottomLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },


    bottomLeftSpan: {
        fontSize: 12,
        color: 'gray',


    },
    bottomRight: {},
    button: {
        borderWidth: 0,
        padding: 8,
        color: 'white',
        backgroundColor: '#FF69B4',
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 15
    },





})
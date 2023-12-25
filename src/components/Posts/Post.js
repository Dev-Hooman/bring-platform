import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Icon, Image } from '@rneui/base'

const Post = () => {
  return (
    <View style={styles.postContainer} >
      <View style={styles.postDetails}>
        {/* name --- settings */}
        <View style={styles.userInfo}>
          <Avatar
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/bring-chat-a93a6.appspot.com/o/images1666208581479-IMG_9492.JPG?alt=media&token=551349de-b807-41f8-8017-46743ad5ead6"
            }}
            size="small"
            rounded
            title="MT"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Text>
            Steve
          </Text>

        </View>


        <Icon
          name='gear'
          type='evilicon'
          color='#FF69B4'
        />
      </View>


      <Image style={styles.storyImage}
        source={{ uri: "https://images.unsplash.com/photo-1676707056070-c04e16a295b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }}
      />


      <View style={styles.likeAndComment}>
        <View style={styles.ArrangelikeAndComment}>

          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 6 }}>
            <Icon

              size={25}
              name='heart-outline'
              type='ionicon'
              color='#FF69B4'

            />
            <Text style={{ color: '#FF69B4' }}>
              230
            </Text>

          </View>


          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 6 }}>

            <Icon

              size={25}
              name='message'
              type='evilIcon'
              color='#FF69B4'

            />

            <Text style={{ color: '#FF69B4' }}>
              230
            </Text>




          </View>


          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 6 }}>

            <Icon

              size={25}
              name='share-outline'
              type='ionicon'
              color='#FF69B4'

            />

            <Text style={{ color: '#FF69B4' }}>
              {" "}
            </Text>
          </View>



        </View>


        <Icon
          name='save'
          type='font-awesome-5'
          color='#FF69B4'
        />
      </View>

      <View style={styles.comments}>
        <Text>

        </Text>

      </View>

    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  postContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: -10,
    shadowRadius: 20,
    borderRadius: 20,
    marginBottom: 30,


  },
  storyImage: {
    marginTop: 10,
    width: 350,
    height: 350,
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: -10,
    shadowRadius: 20,
    borderRadius: 20,

  },
  postDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 350


  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 80
  },
  likeAndComment: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    width: 350
  },
  ArrangelikeAndComment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 6,
    width: 110
  },
  comments: {

  }
})
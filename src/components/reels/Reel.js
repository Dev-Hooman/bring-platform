import { Icon } from '@rneui/base';
import React, { useState, useRef, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, useWindowDimensions, StatusBar, KeyboardAvoidingView } from 'react-native';

import { Avatar } from '@rneui/base';
import BottomSheet from '../bottomSheet/BottomSheet';
import ShareReels from '../ShareReels/ShareReels';
import { ScrollView } from 'react-native-gesture-handler';


const Reel = ({ item, navigation }) => {

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(item.likeCount);
  const [follow, setFollow] = useState(false);
  console.log(Dimensions.get("window").height);

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setIsLiked(!isLiked);
  };

  const { height } = useWindowDimensions();
  const bottomSheetRef = useRef();

  console.log("Bottom sheet",bottomSheetRef.current);
  const pressHandler = useCallback(() => {
    bottomSheetRef.current.expand();
  }, []);

  const enterCommentScreen = (id, username) => {
    navigation.navigate("CommentsScreen", {
      id: id,
      commentingUsername: username,
    })

  }

  return (
    <View>
      <View style={styles.reelContainer}>
        <Image source={{ uri: item.picture }} style={styles.image} />
        <View style={styles.userInfoContainer}>
          <View style={{ width: 300, flex: 1, flexDirection: 'row', alignContent: 'center', justifyContent: 'space-evenly' }}>
            <Avatar
              size={35}
              rounded
              source={{
                uri:
                  'https://images.unsplash.com/photo-1624605799697-031b055ba69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}
            />

            <Text style={styles.usernameText}>{item.username}</Text>
            {

              follow ? (
                <TouchableOpacity onPress={() => { setFollow(false) }}>
                  <View style={{
                    borderWidth: 2,
                    borderColor: 'white',
                    padding: 10,
                    borderRadius: 200,
                  }}>

                    <Text style={styles.followText} >unfollow</Text>
                  </View>
                </TouchableOpacity>


              ) : (
                <TouchableOpacity

                  onPress={() => { setFollow(true) }}
                >
                  <View style={{
                    borderWidth: 2,
                    borderColor: 'white',
                    padding: 10,
                    borderRadius: 200,

                  }}>
                    <Text style={styles.followText} >Follow</Text>
                  </View>
                </TouchableOpacity>
              )
            }

          </View>
          <Text style={styles.descriptionText}>{item.description}</Text>


          <TouchableOpacity
            onPress={() => { enterCommentScreen(item.id, item.username) }}


          >
            <View>
              <View
                style={styles.commentInputButton}
              >
                <Text style={{
                  color: 'white',
                  fontSize: 16,
                }}>
                  comment...
                </Text>

                <Icon
                  name="comment"
                  color='white'
                  type="font-awesome"
                  size={20}
                />
              </View>

            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.likeContainer}>
          <View >
            <TouchableOpacity onPress={handleLike}
              style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 10
              }}
            >
              {
                isLiked ? (
                  <Icon
                    raised
                    size={30}
                    name='heart'
                    type='font-awesome'
                    color='red'

                  />

                ) : (<Icon
                  raised
                  size={30}
                  name='heart'
                  type='font-awesome'
                  color='black'
                />)
              }
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 20, }}
              >
                {likeCount}

                {/* {isLiked ? 'Unlike' : 'Like'} */}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => { pressHandler() }}

              style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 10
              }}
            >

              <Icon
                raised
                size={27}
                name='share'
                type='font-awesome'
                color='#FF69B4'

              />

              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 19, }}
              >
                Share

                {/* {isLiked ? 'Unlike' : 'Like'} */}
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>


      <BottomSheet
        ref={bottomSheetRef}
        activeHeight={height * 0.6}
        backgroundColor={'white'}
        backDropColor={'black'}
      >
        <Text style={{ color: 'black', fontSize: 30, alignSelf: 'flex-start', margin: 20 }}>
          Share
        </Text>

        <View style={{ display: 'flex', flexDirection: 'column', margin: 4, justifyContent: 'flex-end' }}>
          <ScrollView>
            <ShareReels />
          </ScrollView>
        </View>
      </BottomSheet>

    </View>



  )
}

const styles = {

  reelContainer: {
    width: '100%',
    height: 820,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  userInfoContainer: {
    position: 'absolute',
    top: 640,
    left: 10,
  },
  usernameText: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 30,
  },
  followText: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 13,

  },
  descriptionText: {
    color: 'white',
    fontSize: 20,
    width: 300,
    marginLeft: 22,
    margin: 10
  },
  likeContainer: {
    position: 'absolute',
    top: 530,
    right: 10,
  },
  likeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  likeCount: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  commentInputButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    width: 270,
    height: 40,
    marginLeft: 20
  },


};
export default Reel


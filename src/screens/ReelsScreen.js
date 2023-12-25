import React, { useLayoutEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import Reel from '../components/reels/Reel'
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from '@rneui/base';


const reels = [
  {
    id: 1,
    picture: 'https://images.unsplash.com/photo-1624605799697-031b055ba69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    username: 'Maria Dex',
    description: 'I always love to come in arcade... ',
    likeCount: 639
  },
  {
    id: 2,
    picture: 'https://images.unsplash.com/photo-1522825180917-a355ef45e880?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    username: 'Jane Doe',
    description: 'I love Brewing coffee, especially when I am coding...',
    likeCount: 266

  },
  {
    id: 3,
    picture: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username: 'Arisu Usagi',
    description: 'Lets gooo, DJ NIGHT, so hype!! for this',
    likeCount: 7

  },
  {
    id: 4,
    picture: 'https://images.unsplash.com/photo-1629995235051-069c3e984598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    username: 'Ajmal',
    description: 'hui hui',
    likeCount: 7

  },
];
const ReelsScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      title: "Reels",
      titleVisible: false,
      headerStyle: { backgroundColor: "transparent" },
      headerTitleStyle: { color: "#FF69B4" },
      headerTintColor: "#FF69B4",
      headerRight: () => {
        return (
          <View style={{ marginRight: 20, flexDirection: "row", justifyContent: 'space-between' }}>
            <TouchableOpacity
            >
              <Icon
                name='camera'
                color="#FF69B4"
                type="font-awesome"
                
                style={{ transform: [{ rotateY: '180deg' }] }}
              />
            </TouchableOpacity>

          </View>
        )
      }
    });

  }, [navigation])
  return (
    <View >
      <FlatList
        data={reels}
        renderItem={({ item }) => <Reel  navigation={navigation} item={item} />}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        style={{ marginBottom: 25}}
      />
    </View>
  )
}

export default ReelsScreen



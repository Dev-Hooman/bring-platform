import React, { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Posts from '../components/Posts/Posts';

const ProfileScreen = ({ navigation }) => {
  const friendsData = [
    {
      id: 1,
      name: 'Steve Jobs',
      image: 'https://firebasestorage.googleapis.com/v0/b/bring-chat-a93a6.appspot.com/o/images1666208581479-IMG_9492.JPG?alt=media&token=551349de-b807-41f8-8017-46743ad5ead6',
    },
    {
      id: 2,
      name: 'Thomas Cat',
      image: 'https://firebasestorage.googleapis.com/v0/b/bring-chat-a93a6.appspot.com/o/images1666082915915-IMG_0007.JPG?alt=media&token=442deeca-d3da-4d3e-99d6-209d1dc279c5',
    },
    {
      id: 3,
      name: 'Thomas Cat',
      image: 'https://firebasestorage.googleapis.com/v0/b/bring-chat-a93a6.appspot.com/o/images1666082915915-IMG_0007.JPG?alt=media&token=442deeca-d3da-4d3e-99d6-209d1dc279c5',
    },
    {
      id: 4,
      name: 'Thomas Cat',
      image: 'https://firebasestorage.googleapis.com/v0/b/bring-chat-a93a6.appspot.com/o/images1666082915915-IMG_0007.JPG?alt=media&token=442deeca-d3da-4d3e-99d6-209d1dc279c5',
    },
  ];
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Abdul Rehman's Profile"
    })

  }, [])

  const renderFriend = ({ item }) => (
    <View style={styles.friendItem}>
      <Image source={{ uri: item.image }} style={styles.friendAvatar} />
      <Text style={styles.friendName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>


        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80' }}
          style={styles.coverImage}
        />
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80' }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Abdul Rehman</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Friend</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.friendsSection}>
          <Text style={styles.sectionTitle}>Friends</Text>
          <ScrollView
            horizontal
            contentContainerStyle={styles.friendsList}
            showsHorizontalScrollIndicator={false}
          >
            {friendsData.map((friend) => (

              <View key={friend.id} style={styles.friendItem}>
                <Image source={{ uri: friend.image }} style={styles.friendAvatar} />
                <Text style={styles.friendName}>{friend.name}</Text>
              </View>
            ))}
          </ScrollView>

        </View>

        {/* Posts Area */}
        <View style={{ marginTop: 24, marginBottom: 40 }}>

          <Text style={styles.postSectionTitle}
          >
            Your Posts
          </Text>

          <Posts />
          <Posts />
          <Posts />


        </View>


      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -75,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  addButton: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FF69B4',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  friendsSection: {
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  friendsList: {
    alignItems: 'center',
  },
  friendItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  friendAvatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  friendName: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  postSectionTitle: {

    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 15

  }
});

export default ProfileScreen;

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const userData = [
  { id: '1', name: 'David Red', avatar: 'https://i.pravatar.cc/300' },
  { id: '2', name: 'John Snow', avatar: 'https://i.pravatar.cc/300' },
  { id: '3', name: 'Sheldon Cooper', avatar: 'https://i.pravatar.cc/300' },
  { id: '4', name: 'Rajesh Bro', avatar: 'https://i.pravatar.cc/300' },
  { id: '5', name: 'Lenoard Hofstadar', avatar: 'https://i.pravatar.cc/300' },

];

const ShareReels = () => {

  const renderItem = ({ item }) => (
    <View style={styles.userContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.id} {item.name}</Text>
      </View>
      <TouchableOpacity style={styles.shareButton} onPress={() => handleShare(item)}>
        <Text style={styles.shareButtonText}>Share</Text>
      </TouchableOpacity>
    </View>
  );

  const handleShare = (user) => {
    // Implement your share functionality here
    console.log(`Sharing ${user.name}`);
  };

  return (
    
    <FlatList
      data={userData}
      nestedScrollEnabled
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={{    marginBottom: 170
      }}
    />
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',

  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 16,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shareButton: {
    backgroundColor: '#FF69B4',
    padding: 8,
    borderRadius: 8,
  },
  shareButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ShareReels;

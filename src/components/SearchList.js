import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem } from "@rneui/themed";
import { Avatar } from "@rneui/themed";
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchList = ({email,displayName, profilePicture, navigation}) => {

    return (
            <ListItem  bottomDivider>
                <Avatar
                    size={55}
                    rounded
                    source={{ uri: profilePicture || 'https://img.icons8.com/color/800/000000/circled-user-male-skin-type-7--v1.png' }}
                />
                <ListItem.Content>
                    <ListItem.Title style={{ fontWeight: "800" }}>
                            {displayName}
                    </ListItem.Title>

                    <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                        {email}
                    </ListItem.Subtitle>

                </ListItem.Content>
            </ListItem>

    )
}


export default SearchList

const styles = StyleSheet.create({})
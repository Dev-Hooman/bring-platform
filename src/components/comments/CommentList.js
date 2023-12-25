import { View, Text, StyleSheet } from 'react-native'
import React , {useState} from 'react'
import { ListItem, Icon } from "@rneui/themed";
import { TouchableOpacity } from 'react-native-gesture-handler';


import { Avatar } from "@rneui/themed";


const CommentList = ({ id, username, comment , heart}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(heart);
  
    const handleLike = () => {
      if (!isLiked) {
        setLikeCount(likeCount + 1);
      } else {
        setLikeCount(likeCount - 1);
      }
      setIsLiked(!isLiked);
    };

    return (
        <ListItem key={id} bottomDivider>
            <Avatar
                size={30}
                rounded
                source={{ uri: "https://lh3.googleusercontent.com/a-/AFdZucq6FQtKWNQJlNsj7QqLE1pZVTUkYndx37w1b6IwAg=s96-c" }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "500" }}>
                    {username}
                </ListItem.Title>

                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail"
                >
                    {comment}
                </ListItem.Subtitle>

                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail"
                >
                    <Text
                    style={{ color: 'gray', fontSize: 16, padding: 20 }}
                    >
                    likes: {likeCount}

                    </Text>
                </ListItem.Subtitle>


            </ListItem.Content>
            <TouchableOpacity onPress={ handleLike}
                style={{ position: 'relative', right: 0, }}
            >

{
                isLiked ? (
                    <Icon name="heart" type='font-awesome' size={20} color="red" />

                ) : ( <Icon name="heart" type='font-awesome' size={20} color="black" />)
              }

               
            </TouchableOpacity>

        </ListItem>

    )
}


export default CommentList  
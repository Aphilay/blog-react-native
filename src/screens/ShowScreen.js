import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";
const ShowScreen = ({ navigation }) => {
  // log test to view item.id from provided by IndexScreen
  //console.log(navigation.getParam("id"));

  // state === the list of blog posts
  const { state } = useContext(Context);

  // find: helper function to find blogPost.id that is provided from navigation.id
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};
// Direct reference to ShowScreen component, which contains navigationOptions
// This is used to show pencil(edit) icon only on ShowScreen ONLY
// navigation object is passed in to use navigate function
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" style={styles.pencil} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  pencil: {
    fontSize: 30,
    marginRight: 10
  }
});

export default ShowScreen;

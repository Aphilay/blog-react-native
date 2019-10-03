import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
const ShowScreen = ({ navigation }) => {
  // test to view item.id from IndexScreen
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
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;

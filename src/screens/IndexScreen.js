import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
const IndexScreen = ({ navigation }) => {
  // test to see what props object contains (e.g. navigation)
  // pass in props in replace of navigation
  // console.log(props);
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  // useEffect will only call getBlogPosts once upon render
  // []: inidicates that we only want arrow function exactly
  // once when component shows up on screen
  // however, 'didFocus' fetches getBlogPost when IndexScreen
  // becomes primary screen on device again.
  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener("didFocus", () => {
      getBlogPosts();

      return () => {
        //useEffect return statement: only gets reached when IndexScreen is no longer in use
        // this call cleans up listener obj to prevent memory leak
        // WHY?: incase we don't want to use IndexScreen
        // component anymore on device any longer
        listener.remove();
      };
    });
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text>
                  {item.title}-{item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

// Direct reference to IndexScreen component, which contains navigationOptions
// This is used to show '+' icon only on IndexScreen ONLY
// navigation object is passed in to use navigate function
IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather style={styles.plus} name="plus" />
      </TouchableOpacity>
    )
  };
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray"
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  },
  plus: {
    fontSize: 30,
    marginRight: 10
  }
});

export default IndexScreen;

//httpRequest test commit

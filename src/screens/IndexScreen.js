import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
const IndexScreen = ({ navigation }) => {
  // test to see what props object contains (e.g. navigation)
  // pass in props in replace of navigation
  //console.log(props);
  const { state, deleteBlogPost } = useContext(Context);
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
// This is used to show '+' icon only on IndexScreen
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

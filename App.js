import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";

//createStackNavigator takes two argument:
// (all possible screens user can navigate to, config options for CSN)
const navigator = createStackNavigator(
  {
    Index: IndexScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs"
    }
  }
);

export default createAppContainer(navigator);

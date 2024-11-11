import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Home from "./Home";
import News from "./News";
import Settings from "./Settings";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Planets" component={Home} />
          <Tab.Screen name="Spaceships" component={News} />
          <Tab.Screen name="Films" component={Settings} />
        </Tab.Navigator>
      )}

      {Platform.OS == "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Planets" component={Home} />
          <Drawer.Screen name="Spaceships" component={News} />
          <Drawer.Screen name="Films" component={Settings} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

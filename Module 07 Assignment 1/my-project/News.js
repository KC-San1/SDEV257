import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ListContainer from "./ListContainer";
import MyImage from "./SpaceShipPhoto";

export default function News({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Spaceships Content</Text>
      <MyImage />
      <ListContainer />
    </View>
  );
}

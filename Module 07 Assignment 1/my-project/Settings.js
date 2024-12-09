import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ListContainer from "./ListContainer";
import MyImage from "./FilmsPhoto";

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Films Content</Text>
      <MyImage />
      <ListContainer />
    </View>
  );
}

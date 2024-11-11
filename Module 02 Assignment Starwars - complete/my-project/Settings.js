import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ListContainer from "./ListContainer";

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Films Content</Text>
      <ListContainer />
    </View>
  );
}

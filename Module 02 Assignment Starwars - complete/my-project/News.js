import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ListContainer from "./ListContainer";

export default function News({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Spaceships Content</Text>
      <ListContainer />
    </View>
  );
}

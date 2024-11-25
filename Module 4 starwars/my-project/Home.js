import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ListContainer from "./ListContainer";
import MyImage from "./PlanetsPhoto";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Planets Content</Text>
      <MyImage />
      <ListContainer />
    </View>
  );
}

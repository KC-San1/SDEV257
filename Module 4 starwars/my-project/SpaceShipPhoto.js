import React from "react";
import { Image } from "react-native";

const MyComponent = () => {
  return (
    <Image
      source={{ uri: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/star-wars-largest-starships-ranked.jpg?q=70&fit=crop&w=1140&h=&dpr=1" }}
      style={{ width: 300, height: 200 }}
    />
  );
};

export default MyComponent;

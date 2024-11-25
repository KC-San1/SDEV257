import React from "react";
import { Image } from "react-native";

const MyComponent = () => {
  return (
    <Image
      source={{ uri: "https://reviewsyouread.wordpress.com/wp-content/uploads/2021/03/10-more-star-wars-planets-as-countries.png" }}
      style={{ width: 300, height: 200 }}
    />
  );
};

export default MyComponent;

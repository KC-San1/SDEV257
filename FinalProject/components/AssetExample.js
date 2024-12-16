import { Text, View, StyleSheet, Image } from 'react-native';

// This component demonstrates how to use local files and assets in a React Native project
export default function AssetExample() {
  return (
    <View style={styles.container}>
      {/* Informational text about importing local assets */}
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
      </Text>
      {/* Displays an image asset */}
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
    </View>
  );
}

// Define styles for the AssetExample component
const styles = StyleSheet.create({
  // Container style to center the content
  container: {
    alignItems: 'center', // Horizontally centers child elements
    justifyContent: 'center', // Vertically centers child elements
    padding: 24, // Adds padding around the container
  },

  // Style for the paragraph text
  paragraph: {
    margin: 24, // Adds spacing around the text
    marginTop: 0, // Removes additional spacing at the top
    fontSize: 14, // Sets a medium font size for readability
    fontWeight: 'bold', // Makes the text bold
    textAlign: 'center', // Centers the text horizontally
  },

  // Style for the logo image
  logo: {
    height: 128, // Sets the height of the image
    width: 128, // Sets the width of the image
  },
});
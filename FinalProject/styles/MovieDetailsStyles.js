import { StyleSheet } from 'react-native';

// Define styles for the Movie Details screen
const MovieDetailsStyles = StyleSheet.create({
  // Container for all details elements
  detailsContainer: {
    alignItems: 'center', // Centers all child elements horizontally
  },

  // Style for the movie image
  detailsImage: {
    width: 200, // Sets the width of the image
    height: 300, // Sets the height of the image
    marginBottom: 10, // Adds spacing below the image
  },

  // Style for the movie title text
  detailsTitle: {
    fontSize: 24, // Large font size for the title
    fontWeight: 'bold', // Makes the title text bold
    marginBottom: 10, // Adds spacing below the title
  },

  // Style for the movie description text
  detailsDescription: {
    fontSize: 16, // Medium font size for the description
    textAlign: 'center', // Centers the text horizontally
    marginBottom: 20, // Adds spacing below the description
  },

  // Style for the back button
  backButton: {
    backgroundColor: '#007bff', // Blue background color for the button
    padding: 10, // Adds padding inside the button for better click area
    borderRadius: 5, // Rounds the corners of the button
  },

  // Style for the text inside the back button
  backButtonText: {
    color: '#fff', // White text color for better contrast against the blue button
    fontWeight: 'bold', // Makes the text bold
  },
});

export default MovieDetailsStyles;

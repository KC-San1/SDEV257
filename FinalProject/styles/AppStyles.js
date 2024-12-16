import { StyleSheet, Platform } from 'react-native';

// Define styles for the main application components
const AppStyles = StyleSheet.create({
  // Container style for the entire app
  container: {
    flex: 1, // Ensures the container takes the full screen height and width
    backgroundColor: '#f5f5f5', // Light gray background for the app
    padding: 20, // Padding around the edges for content spacing
    paddingTop: Platform.OS === 'android' ? 50 : 0, // Adds extra top padding for Android to avoid overlap with the status bar
  },
  
  // Style for the main header text
  header: {
    fontSize: 24, // Large font size for the header
    fontWeight: 'bold', // Makes the text bold
    marginBottom: 10, // Adds spacing below the header
    textAlign: 'center', // Centers the text horizontally
  },
  
  // Style for the search input field
  searchBar: {
    borderWidth: 1, // Adds a border around the input field
    borderColor: '#ccc', // Light gray border color
    padding: 10, // Padding inside the input field for better readability
    borderRadius: 5, // Rounds the corners of the input field
    marginBottom: 10, // Adds spacing below the input field
  },
  
  // Style for the search button
  searchButton: {
    backgroundColor: '#007bff', // Blue background color for the button
    padding: 10, // Padding inside the button for better click area
    borderRadius: 5, // Rounds the corners of the button
    alignItems: 'center', // Centers the button text horizontally
    marginBottom: 10, // Adds spacing below the button
  },
  
  // Style for the text inside the search button
  searchButtonText: {
    color: '#fff', // White text color for better contrast against the blue button
    fontWeight: 'bold', // Makes the text bold
  },
});

export default AppStyles;

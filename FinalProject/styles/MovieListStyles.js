import { StyleSheet } from 'react-native';

// Define styles for the Movie List screen
const MovieListStyles = StyleSheet.create({
  // Style for the entire movie list container
  movieList: {
    marginTop: 10, // Adds spacing above the movie list
  },

  // Style for each individual movie item in the list
  movieItem: {
    flexDirection: 'row', // Aligns elements horizontally in a row
    alignItems: 'center', // Centers items vertically within the row
    marginBottom: 10, // Adds spacing below each movie item
  },

  // Style for the movie poster image
  movieImage: {
    width: 50, // Sets the width of the movie poster
    height: 75, // Sets the height of the movie poster
    marginRight: 10, // Adds spacing to the right of the image
  },

  // Style for the movie title text
  movieTitle: {
    fontSize: 16, // Medium font size for readability
    flex: 1, // Allows the title to fill available space in the row
  },
});

export default MovieListStyles;

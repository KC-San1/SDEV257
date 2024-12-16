import React from 'react';
import { FlatList, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/MovieListStyles';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

// Component to display a list of movies
const MovieList = ({ movies, onSelectMovie }) => {
  // Render a single movie item
  const renderMovieItem = ({ item }) => (
    <TouchableOpacity onPress={() => onSelectMovie(item.id)} style={styles.movieItem}>
      {/* Display movie poster */}
      <Image
        source={{ uri: `${IMAGE_URL}${item.poster_path}` }}
        style={styles.movieImage}
      />
      {/* Display movie title */}
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={movies} // The array of movies to render
      renderItem={renderMovieItem} // Render function for each movie
      keyExtractor={(item) => item.id.toString()} // Unique key for each movie
      style={styles.movieList} // Apply styling to the list
    />
  );
};

export default MovieList;

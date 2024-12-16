import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from '../styles/MovieDetailsStyles';

const API_KEY = 'd43aa408847148b76d5db40624df5a09'; // Add your TMDB API key here
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

// Component to display detailed information about a specific movie
const MovieDetails = ({ movieId, onBack }) => {
  const [movie, setMovie] = useState(null); // State to hold movie details

  // Fetch movie details from the TMDB API
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
          params: {
            api_key: API_KEY, // Use the API key for authentication
          },
        });
        setMovie(response.data); // Store movie details in state
      } catch (error) {
        console.error('Error fetching movie details:', error); // Log any errors
      }
    };

    fetchMovieDetails();
  }, [movieId]); // Re-run effect if movieId changes

  // Show nothing while the movie details are loading
  if (!movie) return null;

  return (
    <View style={styles.detailsContainer}>
      {/* Display movie poster */}
      <Image
        source={{ uri: `${IMAGE_URL}${movie.poster_path}` }}
        style={styles.detailsImage}
      />
      {/* Display movie title */}
      <Text style={styles.detailsTitle}>{movie.title}</Text>
      {/* Display movie overview */}
      <Text style={styles.detailsDescription}>{movie.overview}</Text>
      {/* Back button to return to the previous screen */}
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;

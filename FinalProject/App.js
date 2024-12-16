import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import styles from './styles/AppStyles';

const API_KEY = 'd43aa408847148b76d5db40624df5a09';
const BASE_URL = 'https://api.themoviedb.org/3';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: searchQuery,
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {!selectedMovie ? (
        <>
          <Text style={styles.header}>MovieScope</Text>
          <TextInput
            style={styles.searchBar}
            placeholder="Search for a movie..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity onPress={fetchMovies} style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
          <MovieList movies={movies} onSelectMovie={(id) => setSelectedMovie(id)} />
        </>
      ) : (
        <MovieDetails
          movieId={selectedMovie}
          onBack={() => setSelectedMovie(null)}
        />
      )}
    </SafeAreaView>
  );
}
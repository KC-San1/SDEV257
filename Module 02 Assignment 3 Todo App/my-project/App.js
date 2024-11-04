import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>

          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            <Task text={'Task 1'} /> I
            <Task text='Task 2' />
          </View>

        </View>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    },
    sectionTitle: {},
    items: {
      marginTop: 30,
    },
    });

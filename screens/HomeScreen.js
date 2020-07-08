import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function HomeScreen({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the first Quizzito Frontend Challenge !</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Second')}
      >
        <Text style={styles.buttonText}>Go to the Next screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    paddingHorizontal:40,
    backgroundColor:'#f9f9f9',
  },
  title:{
    fontSize:30,
    fontStyle: 'bold',
  },
  button:{
    marginVertical:15,
    paddingVertical:15,
    paddingHorizontal:20,
    borderRadius: 5,
    backgroundColor:'#335ff2'
  },
  buttonText:{
    color:'#fff',
    fontSize:16,
  }
});
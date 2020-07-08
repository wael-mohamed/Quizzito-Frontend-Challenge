import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'

export default function Screen2({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.fullWidthImage} source={require('../assets/full-width.png')} width={'100%'} height={300} />
      <View style={{justifyContent:'center', flex:1}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Third')}
        >
          <Text style={styles.buttonText}>Go to third screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor:'#f9f9f9',
  },
  button:{
    marginVertical:15,
    paddingVertical:15,
    paddingHorizontal:20,
    borderRadius: 5,
    backgroundColor:'#33f25f'
  },
  buttonText:{
    color:'#224422',
    fontSize:16,
  },
  fullWidthImage:{
    resizeMode:'contain',
    backgroundColor:'#eee'
  }
});
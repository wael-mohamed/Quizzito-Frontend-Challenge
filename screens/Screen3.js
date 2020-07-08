import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Screen3({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        > 
          <Ionicons name="md-home" size={18} style={styles.iconLeft} color="#fff" />
          <Text style={styles.buttonText}>Go Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTransparent}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonTransparentText}>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor:'#f9f9f9',
  },
  button:{
    marginVertical:15,
    paddingVertical:15,
    paddingHorizontal:20,
    borderRadius: 5,
    backgroundColor:'#335ff2',
    flexDirection:'row',
    alignItems:'center'
  },
  buttonText:{
    color:'#fff',
    fontSize:16,
  },
  buttonTransparent:{
    marginVertical:15,
    paddingVertical:15,
    paddingHorizontal:20,
  },
  buttonTransparentText:{
    color:'#666',
    textAlign:'center'
  },
  iconLeft:{
    marginRight:5
  }
});
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={Screen2} />
        <Stack.Screen name="Third" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

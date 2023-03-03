


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SongScreen from './Components/SongScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import AudioPlayers from './Components/AudioPlayer';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="SongScreen" component={SongScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="AudioPlayers" component={AudioPlayers} options={{ headerShown: false }}/>

   

  

    </Stack.Navigator>
   
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})
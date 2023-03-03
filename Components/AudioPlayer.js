import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {AudioPlayer} from 'react-native-simple-audio-player';
const AudioPlayers = ({route}) => {
    const URL=route.params.url
    console.log(URL)
    return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#313131',
            justifyContent: 'center',
          }}>
   
          <AudioPlayer
            url={URL}
            
          />
        </View>
      );
}

export default AudioPlayers

const styles = StyleSheet.create({})
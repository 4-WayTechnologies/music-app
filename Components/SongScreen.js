import { StyleSheet, Text, View,FlatList, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import songs from './Data'
const SongScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.headerText}>Song List</Text>
 <FlatList
 data={songs}
 renderItem={({item,index})=>{
    return(
<TouchableOpacity style={styles.box} onPress={()=>navigation.navigate('AudioPlayers',item)}>
<Image source={item.artwork} style={styles.img}/>
<View style={{marginLeft:15}}>
<Text style={styles.title}>Title :- {item.title}</Text>
<Text style={styles.title}>Artist :- {item.artist}</Text>
<Text style={styles.title}>Duration :- {item.duration}</Text>

</View>
</TouchableOpacity>
    )
 }}
 />
    </View>
  )
}

export default SongScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },box:{
        width:'100%',
        height:100,
        backgroundColor:'black',
        marginVertical:3,
        flexDirection:'row'
    },img:{
        width:100,
        height:100
    },title:{
        color:'#ffffff',
        fontSize:16,
        marginTop:5
    },headerText:{
        alignSelf:'center',
        fontSize:20,
        color:'#000000',
        textDecorationLine:'underline'
    }
})
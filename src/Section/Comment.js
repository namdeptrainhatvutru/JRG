import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const data = [
    {id:1,avatar:'https://i.pinimg.com/736x/c2/11/15/c21115f2d5594c415aee4d6718ca5976.jpg',name:'Namdz',date:'Oct 15,2024',star:5,comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
     {id:2,avatar:'https://i.pinimg.com/736x/c2/11/15/c21115f2d5594c415aee4d6718ca5976.jpg',name:'Namdz',date:'Oct 15,2024',star:4,comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {id:3,avatar:'https://i.pinimg.com/736x/c2/11/15/c21115f2d5594c415aee4d6718ca5976.jpg',name:'Namdz',date:'Oct 15,2024',star:1,comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
]
const renderItem = ({item})=>{
  const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <MaterialCommunityIcons 
                    key={i} 
                    name="star" 
                    size={12} 
                    color={i <= item.star ? Colors.yellow : '#E0E0E0'} 
                />
            );
        }
        return stars;
    };

    return(
        <View style={{flexDirection:'row',margin:5,borderBottomWidth:1,borderBottomColor:'#dddadaff',paddingBottom:10}}>
            <View>
                <Image style={{width:40,height:40,borderRadius:20}} source={{uri:item.avatar}}/>
            </View>
            <View style={{marginLeft:10,paddingRight:40}}>
                <Text style={{color:Colors.blue,fontWeight:'500'}}>{item.name}</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  { renderStars()}
                  <Text style={{fontSize:8,marginLeft:5}}>{item.date}</Text>
                </View>
                <Text style={{fontSize:12}}>{item.comment}</Text>
                <View style={{flexDirection:'row',marginTop:5,alignItems:'center',justifyContent:'flex-end'}}>
                  
                  <MaterialCommunityIcons name="thumb-up-outline" size={16} color={Colors.gray} />
                  <Text style={{fontSize:12,marginLeft:3,marginRight:8}}>like</Text>
                  
                  <MaterialCommunityIcons name="message-reply-outline" size={16} color="gray" /> 
                  <Text style={{fontSize:12,marginLeft:3}}>Reply</Text>
                </View>
            </View>
        </View>
    )
}

const Comment = () => {

  return (
    <View >
      <FlatList
      scrollEnabled={false} 
          data={data}
          renderItem={renderItem}
          keyExtractor={item=>item.id.toString()}
      />
      <TouchableOpacity style={{borderWidth:1,borderColor:Colors.green,borderRadius:5,backgroundColor:'#fff',width:'50%',alignSelf:'center',marginTop:5}}>
        <Text style={{color:Colors.green,fontWeight:'bold',textAlign:'center',padding:8}}>See All Reviews</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Comment

const styles = StyleSheet.create({})
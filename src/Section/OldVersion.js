import {FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React, {version} from 'react';
import Colors from '../constants/Colors';
const data = [
  {
    id: 1,
    name: 'Facebook',
    star: '5.0',
    version: 'v1.15.6',
    image: require('../assets/images/facebook.png'),
    mb: '456.2MB',
    date: 'Oct 15, 2024',
    time: 'Oct 15,2024',
    by: 'Namdz',
    download: '',
  },
  {
    id: 2,
    name: 'Facebook',
    star: '5.0',
    version: 'v1.15.6',
    image: require('../assets/images/facebook.png'),
    mb: '456.2MB',
    date: 'Oct 15, 2024',
    time: 'Oct 15,2024',
    by: 'Namdz',
    download: '',
  },
  {
    id: 3,
    name: 'Facebook',
    star: '5.0',
    version: 'v1.15.6',
    image: require('../assets/images/facebook.png'),
    mb: '456.2MB',
    date: 'Oct 15, 2024',
    time: 'Oct 15,2024',
    by: 'Namdz',
    download: '',
  },
];

const OldVersion = () => {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
          borderBottomWidth: 1,
        borderBottomColor: '#dddadaff',
        paddingBottom:10,

        }}>
        <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'space-between',width:'100%'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image
            source={item.image}
            style={{width: 65, height: 65, borderRadius: 8, marginRight: 10}}
          />
            <View>
            <Text style={{fontWeight: 'bold', fontSize: 12, color: 'black'}}>{item.name} - {item.version}</Text>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
              <Image style={{width:10,height:10,tintColor:Colors.yellow,marginRight:2}} source={require('../assets/images/star-inline.png')}/>
            <Text style={{fontSize:8,color:Colors.yellow,fontWeight:'bold'}}>{item.star}</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize: 5, color: Colors.green,marginRight:5,backgroundColor:'#B2F3D3',padding:3,borderRadius:3}}>{item.mb}</Text>
            <Text style={{fontSize: 5, color: Colors.green,marginRight:5,backgroundColor:'#B2F3D3',padding:3,borderRadius:3}}>{item.time}</Text>
            </View>
            </View>
            </View>
            <TouchableOpacity style={{backgroundColor:Colors.green,padding:8,borderRadius:5,flexDirection:'row',paddingVertical:4,alignItems:'center'}}>
                <Image style={{width:15,height:15,tintColor:'white'}} source={require('../assets/images/download.png')}/>
                <Text style={{color:'white',fontSize:10,fontWeight:'700',marginLeft:5}}>Download</Text>
            </TouchableOpacity>
        </View>
       
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <TouchableOpacity style={{margin:3,borderColor:Colors.green,borderWidth:1,borderRadius:5,padding:10,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:Colors.green,fontSize:12,fontWeight:'bold'}}>All Version</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OldVersion;

const styles = StyleSheet.create({});

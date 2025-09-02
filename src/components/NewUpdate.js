import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const data = [
   
     {id : 1 , name : "Facebook", star : "5.0", downloadCount : "2,1M",image:require('../assets/images/facebook.png') },
     {id : 2 , name : "Facebook", star : "5.0", downloadCount : "2,1M",image:require('../assets/images/facebook.png') },
     {id : 3 , name : "Facebook", star : "5.0", downloadCount : "2,1M",image:require('../assets/images/facebook.png') },
     {id : 4 , name : "Facebook", star : "5.0", downloadCount : "2,1M",image:require('../assets/images/facebook.png') },
     {id : 5 , name : "Facebook", star : "5.0", downloadCount : "2,1M",image:require('../assets/images/facebook.png') },
     {id : 6 , name : "Facebook", star : "5.0", downloadCount : "2,1M",image:require('../assets/images/facebook.png') },
     {id : 7 , name : "Facebook", star : "5.0", downloadCount : "2,1M",image:require('../assets/images/facebook.png') },
     {id : 8 , name : "Facebook", star : "5.0", downloadCount : "2,1M",image:require('../assets/images/facebook.png') },
     {id : 9 , name : "Facebook", star : "5.0", downloadCount : "2,1M",image:require('../assets/images/facebook.png') },
     {id : 10 , name : "Facebook", star : "5.0", downloadCount : "2,1M",image:require('../assets/images/facebook.png') },
     {id : 11 , name : "Facebook", star : "5.0", downloadCount : "2,1M",image:require('../assets/images/facebook.png') },
     {id : 12 , name : "Facebook", star : "5.0", downloadCount : "2,1M",image:require('../assets/images/facebook.png') },
     {id : 13 , name : "Facebook", star : "5.0", downloadCount : "2,1M",image:require('../assets/images/facebook.png') },
     {id : 14 , name : "Facebook", star : "5.0", downloadCount : "2,1M",image:require('../assets/images/facebook.png') },
     {id : 15 , name : "Facebook", star : "5.0", downloadCount : "2,1M",image:require('../assets/images/facebook.png') },
]
const renderItem = ({item})=>{
    return(
        <View style={styles.itemContainer}>
            <Image style={styles.image} source={item.image}/>
            <Text style={{fontWeight:'bold',fontSize:10,color:'black',marginLeft:5}}>{item.name}</Text>
            <View style={styles.row}>
                <View>
                <Text style={styles.textItem}>⭐️{item.star}</Text>
                </View>
                <View>
                <Text style={styles.textItem}>{item.downloadCount}</Text>
                </View>
            </View>
        </View>
    )
}

const NewUpdate = () => {
    
  return (
    <View style={styles.container}>
      <Text style={styles.NewUpdate}>New Updates</Text>
      <FlatList
        data={data}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={5}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
      <View style={{ height: 5 ,backgroundColor:'#f2f2f2',marginHorizontal:-20}} />
    </View>
  )
}

export default NewUpdate

const styles = StyleSheet.create({
    NewUpdate:{
        fontWeight:'bold',
        fontSize:15,
        color:'black',
        marginBottom:10 
    },
    container:{
        padding:20,
        paddingTop:0,
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    image:{
        width:60,
        height:60,
        borderRadius:15,
        backgroundColor: 'lightgray'
    },
    itemContainer:{
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    textItem:{
        fontSize: 8,
        color: 'gray'
    }
})
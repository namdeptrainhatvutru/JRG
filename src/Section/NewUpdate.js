import { FlatList, Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../constants/Colors';

const { width, height } = Dimensions.get('window');

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

const NewUpdate = () => {
    const PADDING_HORIZONTAL = 20;
    const ITEM_MARGIN = 5;
    
    // Adjust number of columns based on screen width
    const getNumColumns = () => {
        // For phone
        if (width < 600) return 5;
        // For tablet
        return 7;
    };
    
    const NUM_COLUMNS = getNumColumns();
    
    // Calculate item width dynamically
    const getItemWidth = () => {
        const availableWidth = width - (PADDING_HORIZONTAL * 2);
        const totalMargin = ITEM_MARGIN * 2 * NUM_COLUMNS;
        return (availableWidth - totalMargin) / NUM_COLUMNS;
    };
    
    const itemWidth = getItemWidth();
    
    const renderItem = ({item}) => {
        return(
            <View style={[styles.itemContainer, { width: itemWidth }]}>
                <Image 
                    style={[styles.image, { width: itemWidth, height: itemWidth }]} 
                    source={item.image}
                    resizeMode="contain"
                />
                <Text numberOfLines={1} style={styles.nameText}>{item.name}</Text>
                <View style={styles.row}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('../assets/images/star-inline.png')} style={{width:8,height:8}}/>
                    <Text style={[styles.textItem,{color:Colors.yellow}]}>{item.star}</Text>
                    </View>
                    <View>
                    <Text style={styles.textItem}>{item.downloadCount}</Text>
                    </View>
                </View>
            </View>
        )
    }
  
    return (
        <View style={styles.container}>
            <Text style={styles.NewUpdate}>New Updates</Text>
            <FlatList
                data={data.slice(0, 15)}
                scrollEnabled={false}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                numColumns={NUM_COLUMNS}
                contentContainerStyle={styles.flatListContainer}
                key={NUM_COLUMNS.toString()} // Force re-render when columns change
            />
            <View style={{ height: 5, backgroundColor:'#f2f2f2', marginHorizontal:-20}} />
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
    flatListContainer: {
        justifyContent: 'space-between',
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 5,
    },
    image:{
        borderRadius:15,
        backgroundColor: 'lightgray',
        alignSelf: 'center',
    },
    itemContainer:{
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 5,
        padding: 5,
    },
    nameText: {
        fontWeight:'bold',
        fontSize:10 ,
        color:'black',
        marginTop: 5,
    },
    textItem:{
        fontSize: 7,
        color: 'gray'
    }
})
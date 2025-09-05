import { FlatList, Image, Pressable, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../constants/Colors';

const { width } = Dimensions.get('window');
const PADDING_HORIZONTAL = 20;
const ITEM_MARGIN = 5;
const NUM_COLUMNS = 5;

// Tính toán kích thước item dựa trên màn hình
const getItemWidth = () => {
  const availableWidth = width - (PADDING_HORIZONTAL * 2);
  const totalMargin = ITEM_MARGIN * 2 * NUM_COLUMNS;
  return (availableWidth - totalMargin) / NUM_COLUMNS;
};

const itemWidth = getItemWidth();

const data = [
    { id: 1, name: "gen sin im parky", star: "5.0", downloadCount: "2,1M", image: require('../assets/images/facebook.png') },
    { id: 2, name: "Facebook", star: "5.0", downloadCount: "2,1M", image: require('../assets/images/facebook.png') },
    { id: 3, name: "Facebook", star: "5.0", downloadCount: "2,1M", image: require('../assets/images/facebook.png') },
    { id: 4, name: "Facebook", star: "5.0", downloadCount: "2,1M", image: require('../assets/images/facebook.png') },
    { id: 5, name: "Facebook", star: "5.0", downloadCount: "2,1M", image: require('../assets/images/facebook.png') },
    { id: 6, name: "Facebook", star: "5.0", downloadCount: "2,1M", image: require('../assets/images/facebook.png') },
    { id: 7, name: "Facebook", star: "5.0", downloadCount: "2,1M", image: require('../assets/images/facebook.png') },
    { id: 8, name: "Facebook", star: "5.0", downloadCount: "2,1M", image: require('../assets/images/facebook.png') },
    { id: 9, name: "Facebook", star: "5.0", downloadCount: "2,1M", image: require('../assets/images/facebook.png') },
    { id: 10, name: "Facebook", star: "5.0", downloadCount: "2,1M", image: require('../assets/images/facebook.png') },
]

const HotApp = ({ name, count, iconName, iconColor = 'black' }) => {
    const nav = useNavigation()
    
    const renderItem = ({ item }) => {
        return (
            <Pressable onPress={() => nav.navigate('Detail')}>
                <View style={[styles.itemContainer, { width: itemWidth }]}>
                    <Image style={[styles.image, { width: itemWidth, height: itemWidth }]} source={item.image} />
                    <Text numberOfLines={1} style={{ fontWeight: 'bold', fontSize: 10, color: 'black' }}>{item.name}</Text>
                    <View style={styles.row}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image style={{ width: 8, height: 8 }} source={require('../assets/images/star-inline.png')} />
                        <Text style={[styles.textItem, { color: Colors.yellow }]}>{item.star}</Text>
                        </View>
                        <View>
                        <Text style={[styles.textItem, {}]}>{item.downloadCount}</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => { nav.navigate('Category') }} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'center' }}>
                    <View>
                    {iconName && (
                        <MaterialCommunityIcons 
                            name={iconName} 
                            size={16} 
                            color={iconColor} 
                            style={{ marginRight: 8,marginBottom:8 }} 
                        />
                    )}</View>
                    <Text style={styles.NewUpdate}>{name}</Text>
                </View>
             
                <Image style={{width:16,height:16}} source={require('../assets/images/leftarrow.png')}/>
                
            </Pressable>
            <FlatList
                data={data.slice(0, count)} 
                scrollEnabled={false}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                numColumns={5}
                contentContainerStyle={styles.flatListContainer}
            />
            <View style={{ height: 5, backgroundColor: '#f2f2f2', marginHorizontal: -20 }} />
        </View>
    )
}

export default HotApp

const styles = StyleSheet.create({
    NewUpdate: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'black',
        marginBottom: 10
    },
    container: {
        padding: 20,
        paddingTop: 0,
        paddingBottom: 10,
    },
    flatListContainer: {
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 2,
    },
    image: {
        borderRadius: 15,
        backgroundColor: 'lightgray',
        alignSelf: 'center'
    },
    itemContainer: {
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        
        marginHorizontal: ITEM_MARGIN,
        padding: 5,
    },
    textItem: {
        fontSize: 7,
        color: 'gray'
    }
})
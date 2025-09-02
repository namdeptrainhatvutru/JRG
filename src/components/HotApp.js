import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const data = [

    { id: 1, name: "Facebook", star: "5.0", downloadCount: "2,1M", image: require('../assets/images/facebook.png') },
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


const HotApp = ({ name }) => {

    const nav = useNavigation()
    const renderItem = ({ item }) => {
    return (
        <Pressable
            onPress={() => nav.navigate('Detail')}
        >
        <View style={styles.itemContainer}>
            <Image style={styles.image} source={item.image} />
            <Text style={{ fontWeight: 'bold', fontSize: 10, color: 'black' }}>{item.name}</Text>
            <View style={styles.row}>
                <Text style={[styles.textItem, { color: '#d3bb04ff' }]}>⭐️{item.star}</Text>
                <Text style={[styles.textItem, { marginLeft: 15 }]}>{item.downloadCount}</Text>
            </View>
        </View></Pressable>
    )
}
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.NewUpdate}>{name}</Text>
                <Text style={{ fontSize: 16 }}>{'>'}</Text>
            </View>
            <FlatList
                data={data}
                scrollEnabled={false}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                numColumns={5}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
            <View style={{ height: 5, backgroundColor: '#f2f2f2', marginHorizontal: -20 }} />
        </View>
    )
}

export default HotApp

const styles = StyleSheet.create({
    NewUpdate: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        marginBottom: 10
    },
    container: {
        padding: 20,
        paddingTop: 0,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 5,
        marginTop: 2,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 15,
        backgroundColor: 'lightgray'
    },
    itemContainer: {
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',

    },
    textItem: {
        fontSize: 8,
        color: 'gray'
    }
})
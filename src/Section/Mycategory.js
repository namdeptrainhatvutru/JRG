import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Mycategory = () => {
    return (
        <View style={{width:'100%', flexDirection:'row', justifyContent:'space-around'}}>
            <View style={styles.categoryItem}>
                <Image style={{width: 35, height: 35}} source={require('../assets/images/icons8-game-48.png')} />
                <Text style={{fontSize: 12,fontWeight: 'bold'}}>Game</Text>
            </View>
            <View style={styles.categoryItem}>
                <Image style={{width: 35, height: 35}} source={require('../assets/images/icons8-game-48.png')} />
                <Text style={{fontSize: 12,fontWeight: 'bold'}}>Game</Text>
            </View>
            <View style={styles.categoryItem}>
                <Image style={{width: 35, height: 35}} source={require('../assets/images/icons8-game-48.png')} />
                <Text style={{fontSize: 12,fontWeight: 'bold'}}>Game</Text>
            </View>
            <View style={styles.categoryItem}>
                <Image style={{width: 35, height: 35}} source={require('../assets/images/icons8-game-48.png')} />
                <Text style={{fontSize: 12,fontWeight: 'bold'}}>Game</Text>
            </View>
        </View>
    )
}

export default Mycategory

const styles = StyleSheet.create({
    categoryItem: {
        padding: 10,
        alignItems: 'center',
        flexDirection:'column'
    },
})
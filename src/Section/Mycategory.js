import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const Mycategory = () => {
    return (
        <View style={{width:'100%', flexDirection:'row', justifyContent:'space-around'}}>
            <Image style={styles.right} source={require('../assets/images/leftarrow.png')}/>
            <Image style={styles.left} source={require('../assets/images/leftarrow.png')}/>
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
    right: {
        width:20,
        height:20,
        alignSelf:'center',
        tintColor:Colors.green,
        position:'absolute',
        right:5,
    },
    left: {
        width:20,
        height:20,
        alignSelf:'center',
        tintColor:Colors.green,
        position:'absolute',
        left:5,
        transform:[{rotate:'180deg'}]
    }
})
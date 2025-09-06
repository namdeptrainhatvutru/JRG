import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyHeader from '../Section/MyHeader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../constants/Colors'

const data = [
    {id:1,image:require('../assets/images/banner1.png'),logo:require('../assets/images/banner1.png'),name:'PUBG',desc:'Buy PUBBG with menu hack map',price:2000},
    {id:2,image:require('../assets/images/banner1.png'),logo:require('../assets/images/banner1.png'),name:'NET',desc:'Buy PUBBG with menu hack map PUBBG with menu hack ma',price:2000},
    {id:3,image:require('../assets/images/banner1.png'),logo:require('../assets/images/banner1.png'),name:'PUBG',desc:'Buy PUBBG with menu hack map',price:2000},
    {id:4,image:require('../assets/images/banner1.png'),logo:require('../assets/images/banner1.png'),name:'PUBG',desc:'Buy PUBBG with menu hack map',price:2000},
    {id:5,image:require('../assets/images/banner1.png'),logo:require('../assets/images/banner1.png'),name:'PUBG',desc:'Buy PUBBG with menu hack map',price:2000},
    {id:6,image:require('../assets/images/banner1.png'),logo:require('../assets/images/banner1.png'),name:'PUBG',desc:'Buy PUBBG with menu hack map',price:2000},
    {id:7,image:require('../assets/images/banner1.png'),logo:require('../assets/images/banner1.png'),name:'PUBG',desc:'Buy PUBBG with menu hack map',price:2000},
    {id:8,image:require('../assets/images/banner1.png'),logo:require('../assets/images/banner1.png'),name:'PUBG',desc:'Buy PUBBG with menu hack map',price:2000},
]

const CartItem = ({ item }) => {
    return (
        <View style={styles.card}>
            <Image source={item.image} style={styles.image}/>
            <View style={styles.row}>
                <Image source={item.logo} style={styles.logo}/>
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text numberOfLines={2} style={styles.desc}>{item.desc}</Text>
                    <Text style={styles.price}>{item.price} Coin</Text>
                </View>
                <Pressable style={styles.buyBtn}>
                    <Text style={styles.buyText}>Buy now</Text>
                </Pressable>
            </View>
        </View>
    )
}





const Cart = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffffff' }}>
            <MyHeader
                menu
                onPressMenu={() => console.log('menu')}
                title="Home"
                onRightPress={() => console.log('right')}
                onPressUser={() => { }}
                onPressAPK={() => { }}
                onPressSearch={() => { }}
                onPressBell={() => { }}
                bellBadge={1}
            />
            <ScrollView style={{backgroundColor:'#fff'}}>
                <View style={{ flexDirection: 'row',  padding: 10, backgroundColor: '#fff', borderRadius: 10,alignItems:'center', justifyContent:'space-between' }}>
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Icon name="cart" size={15} />
                   <Text style={styles.market}>Market</Text>
                  </View>
                  <View>
                    <Image style={{width:16,height:16}} source={require('../assets/images/leftarrow.png')}/>
                  </View>
                    
                </View>
                <FlatList
                    style={{ margin: 2 }}
                    data={data}
                    scrollEnabled={false}
                    keyExtractor={(item) => item.id}
                    renderItem={CartItem}
                    numColumns={2}
                />
            </ScrollView>


        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
  card: {
    flex: 1,           
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  image:{
    height:120,
    width: '100%',
    borderRadius:8,
    flex:1,

  },
  row: {
    flexDirection: 'row',
    alignItems:'center',
    padding: 5,
    justifyContent: 'space-around',
    height: 70,
  },
  logo:{
    height:30,
    width:30,
    borderRadius:15,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
  name:{
    fontWeight:'bold',
    color:'black',
    fontSize: 12
  },
  desc:{
    fontSize:6,
    color:'#666'
  },
  price:{
    fontSize:10,
    color:'#18a5ec'
  },
  buyBtn:{
    backgroundColor: Colors.green,
    paddingHorizontal:6,
    paddingVertical:4,
    borderRadius:5,
  },
  buyText:{
    fontSize:8,
    color:'white',
    fontWeight:'bold'
  },
  market:{
    color:'black',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 10,
  }
})

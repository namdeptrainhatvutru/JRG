import { Image, StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import MyHeader from '../components/MyHeader';
import { Icon } from 'react-native-paper';
import MyBanner from '../components/MyBanner';
import Mycategory from '../components/Mycategory';
import MyBanner2 from '../components/MyBanner2';
import Recommended from '../components/Recommended';
import NewUpdate from '../components/NewUpdate';
import ADS from '../components/ADS';
import HotApp from '../components/HotApp';





const Home = () => {


  return (
    <View style={styles.container}>
      <MyHeader
        menu
        rightComponent={<Icon name="user" />}
        onPressMenu={() => console.log('menu')}
        title="Home"
        onRightPress={() => console.log('right')}
        onPressUser={() => {}}
        onPressAPK={() => {}}
        onPressSearch={() => {}}
        onPressBell={() => {}}
        bellBadge={1}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <MyBanner />
        <Mycategory />
        <MyBanner2 />
        <Recommended />
        <NewUpdate/>
        <ADS name="ADS"/>
        <HotApp name='Hot Apps'/>
        <HotApp name='Hot Games'/>
      </ScrollView>
 
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
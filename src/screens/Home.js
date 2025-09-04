import { Image, StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import MyHeader from '../Section/MyHeader';
import { Icon } from 'react-native-paper';
import MyBanner from '../Section/MyBanner';
import Mycategory from '../Section/Mycategory';
import MyBanner2 from '../Section/MyBanner2';
import Recommended from '../Section/Recommended';
import NewUpdate from '../Section/NewUpdate';
import ADS from '../Section/ADS';
import HotApp from '../Section/HotApp';





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
      <ScrollView
        showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 80 }}>
        <MyBanner />
        <Mycategory />
        <MyBanner2 />
        <Recommended />
        <NewUpdate/>
        <ADS name="ADS"/>
        <View style={{ height: 5, backgroundColor: '#f2f2f2', marginHorizontal: -20,marginTop:10 }} />
        <HotApp name='Hot Apps' count={10}/>
        <HotApp name='Hot Games' count={10}/>
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
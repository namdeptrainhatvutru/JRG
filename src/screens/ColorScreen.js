import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import MyHeader from '../components/MyHeader';
import Animated, { FadeIn, useAnimatedRef } from 'react-native-reanimated';

export default function ColorScreen({ route, navigation }) {
  const viewRef = useAnimatedRef(null);
  const [bgColor, setBgColor] = useState();
  useEffect(() => {
    switch (route.name) {
      case 'Home': { setBgColor("white"); break; }
      case 'Search': { setBgColor("white"); break; }
      case 'Add': { setBgColor("white"); break; }
      case 'Account': { setBgColor("white"); break; }
      case 'Like': { setBgColor("white"); break; }
      default: setBgColor("white");
    }
  }, [])
 
  return (
    <Animated.View ref={viewRef} entering={FadeIn.duration(800)}
      style={[Styles.container, { backgroundColor: bgColor }]}>
      {/* <MyHeader
        menu
        onPressMenu={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
      /> */}
      <View style={[Styles.container, { backgroundColor: bgColor }]}>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({})

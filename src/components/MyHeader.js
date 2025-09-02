import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import { Badge, Surface } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import Colors from '../constants/Colors'

const IconSize = 24

const AppHeader = ({
  style,
  onPressUser,
  onPressAPK,
  onPressSearch,
  onPressBell,
  bellBadge,
}) => {
  return (
    <Surface style={[styles.header, style]}>
      <View style={styles.leftGroup}>
        <TouchableOpacity style={styles.circle} onPress={onPressUser}>
          <Feather name="user" size={IconSize} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={onPressAPK}>
            <View >
              <Text style={styles.apkText}>APK</Text>
            </View>
          </TouchableOpacity>
      </View>
      <View style={styles.logoWrap}>
        <Image source={require('../assets/images/Jrgaming.png')} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.rightGroup}>
        <TouchableOpacity style={styles.circle} onPress={onPressSearch}>
          <Feather name="search" size={IconSize} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={onPressBell}>
          <Feather name="bell" size={IconSize} color="#fff" />
          {bellBadge ? (
            <Badge style={styles.badge}>{bellBadge}</Badge>
          ) : null}
        </TouchableOpacity>
      </View>
    </Surface>
  )
}

export default AppHeader

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: Colors.green,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
    paddingHorizontal: 8,
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#fff2',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: 'red',
    color: 'white',
    fontSize: 10,
    minWidth: 16,
    height: 16,
    textAlign: 'center',
    paddingHorizontal: 0,
  },
  logoWrap: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    height: 36,
    width: 120,
  },
  apkCircle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  apkTextWrap: {
    marginLeft: 4,
  },
  apkTextCircle: {
    backgroundColor: '#fff3', // màu mờ
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 4,
	height: 32,

    justifyContent: 'center',
    alignItems: 'center',
  },
  apkText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
})
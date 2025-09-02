import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const data = [
  {
    id: 1,
    name: 'TikTok',
    image: require('../assets/images/facebook.png'),
    desc: 'Create, share and discover short videos set to music',
    size: '456.2MB',
    date: 'Oct 15, 2024',
    type: 'Apps Hack'
  },
  {
    id: 2, 
    name: 'Facebook',
    image: require('../assets/images/facebook.png'),
    desc: 'Create, share and discover short videos set to music',
    size: '456.2MB',
    date: 'Oct 15, 2024',
    type: 'Apps Hack'
  },
  {
    id: 4, 
    name: 'Facebook',
    image: require('../assets/images/facebook.png'),
    desc: 'Create, share and discover short videos set to music',
    size: '456.2MB',
    date: 'Oct 15, 2024',
    type: 'Apps Hack'
  },
  {
    id: 5, 
    name: 'Facebook',
    image: require('../assets/images/facebook.png'),
    desc: 'Create, share and discover short videos set to music',
    size: '456.2MB',
    date: 'Oct 15, 2024',
    type: 'Apps Hack'
  },
]

const AllApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>All Apps/Games</Text>
        <Text style={styles.arrow}>{'>'}</Text>
      </View>

      {data.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Image source={item.image} style={styles.appIcon} />
          
          <View style={styles.appInfo}>
            <View style={{width: 100}}>
            <Text style={styles.appName}>{item.name}</Text>
            <Text numberOfLines={2} style={styles.appDesc}>{item.desc}</Text>
            </View>
            <View style={styles.tagContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{item.size}</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{item.date}</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{item.type}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.downloadButton}>
            <Image style={{tintColor:'white',width:20,height:20}} source={require('../assets/images/download.png')}/>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

export default AllApp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  arrow: {
    fontSize: 18,
    color: '#000'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  appIcon: {
    width: 70,
    height: 70,
    borderRadius: 15
  },
  appInfo: {
    flex: 1,
    marginLeft: 15
  },
  appName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5
  },
  appDesc: {
    fontSize: 8,
    color: '#666',
    marginBottom: 5
  },
  tagContainer: {
    flexDirection: 'row',
    gap: 8
  },
  tag: {
    backgroundColor: '#d1f0d3ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5
  },
  tagText: {
    fontSize: 6,
    color: Colors.green2
  },
  downloadButton: {
    backgroundColor: Colors.green,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 25,
    marginLeft: 10,
    width: 70,
    alignItems: 'center',
  },
  downloadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
  }
})
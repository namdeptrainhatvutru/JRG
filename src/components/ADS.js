import { Button, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
const adData = [
  { id: 1, text: 'Ad 1', image: 'https://images.sftcdn.net/images/t_app-icon-m/p/03674f00-96b7-41df-bf5e-8effe68ae756/475930328/1111-w-warp-icon.jpg', banner: "https://images.sftcdn.net/images/t_app-icon-m/p/03674f00-96b7-41df-bf5e-8effe68ae756/475930328/1111-w-warp-icon.jpg" },
  { id: 2, text: 'Ad 2', image: 'https://images.sftcdn.net/images/t_app-icon-m/p/03674f00-96b7-41df-bf5e-8effe68ae756/475930328/1111-w-warp-icon.jpg', banner: "https://images.sftcdn.net/images/t_app-icon-m/p/03674f00-96b7-41df-bf5e-8effe68ae756/475930328/1111-w-warp-icon.jpg" },
  { id: 3, text: 'Ad 3', image: 'https://images.sftcdn.net/images/t_app-icon-m/p/03674f00-96b7-41df-bf5e-8effe68ae756/475930328/1111-w-warp-icon.jpg', banner: "https://images.sftcdn.net/images/t_app-icon-m/p/03674f00-96b7-41df-bf5e-8effe68ae756/475930328/1111-w-warp-icon.jpg" },
]

const ADS = ({name}) => {
  return (
    <View style={st.container}>
      <Text style={st.ADS}>{name}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {adData.map(ad => (
          <View key={ad.id} style={st.adContainer}>
            <ImageBackground source={{ uri: ad.banner }} style={{ width: 250, height: 130 }} imageStyle={{ borderRadius: 7 }}>
              <View style={{ position: 'absolute', bottom: 2, left: 6, right: 6, zIndex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={{ uri: ad.image }} style={{ width: 30, height: 30, borderRadius: 6 }} />
                  <Text style={{ color: '#fff', padding: 5, fontSize: 12 }}>{ad.text}</Text>
                </View>
                <View>
                  <Pressable style={st.download}>
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 8 }}>Download</Text>
                  </Pressable>
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}

      </ScrollView>
    </View>
  )
}

export default ADS

const st = StyleSheet.create({
  container: {
  marginLeft: 10,
  marginTop: -20,

  },
  ADS: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    marginBottom: 5
  },
  adContainer: {
    marginRight: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
  },
  adText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  download: {
    marginLeft: 80, backgroundColor: Colors.green, padding: 5, borderRadius: 5
  }
})
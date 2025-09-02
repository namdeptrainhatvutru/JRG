import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-paper'
import MyHeader from '../components/MyHeader'
import ADS from '../components/ADS'
import HotApp from '../components/HotApp'
import AllApp from '../components/AllApp'
const App = () => {
    return (
        <View style={styles.container}>
            <MyHeader
                menu
                rightComponent={<Icon name="user" />}
                onPressMenu={() => console.log('menu')}
                title="Home"
                onRightPress={() => console.log('right')}
                onPressUser={() => { }}
                onPressAPK={() => { }}
                onPressSearch={() => { }}
                onPressBell={() => { }}
                bellBadge={1}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <ADS />
                <View style={{ marginTop: 20 }} />
                <HotApp name="Game" />
                <View style={{ marginTop: -15, marginBottom: 20 }}><ADS /></View>
                <HotApp name="Apps Premium" />
                <AllApp />
            </ScrollView>
        </View>
    )
}

export default App

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
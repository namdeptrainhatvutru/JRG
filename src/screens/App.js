import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-paper'
import MyHeader from '../Section/MyHeader'
import ADS from '../Section/ADS'
import HotApp from '../Section/HotApp'
import AllApp from '../Section/AllApp'
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
                <HotApp name="Games" iconName="gamepad" count={10} />
                <View style={{ marginTop: -15, marginBottom: 20 }}><ADS /></View>
                <HotApp name="Apps Premium" iconName="crown" count={10} />
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
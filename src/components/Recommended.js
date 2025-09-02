import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';

const apps = [
	{ name: 'Tiktok', desc: 'Create, share, and discover short videos set to music.', icon: null },
	{ name: 'Clas of Clan', desc: 'Create, share, and discover short videos set to music.', icon: null },
	{ name: 'Facebook', desc: 'Create, share, and discover short videos set to music.', icon: null },
	{ name: 'Line', desc: 'Create, share, and discover short videos set to music.', icon: null },
	{ name: 'Survivor', desc: 'Create, share, and discover short videos set to music.', icon: null },
	{ name: 'HayDay', desc: 'Create, share, and discover short videos set to music.', icon: null },
]

// Chia thành các cột, mỗi cột 3 app
const columns = [];
for (let i = 0; i < apps.length; i += 3) {
    columns.push(apps.slice(i, i + 3));
}

const Recommended = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recommended by KenhTao</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {columns.map((col, colIdx) => (
                    <View style={styles.column} key={colIdx}>
                        {col.map((app, rowIdx) => (
                            <View style={styles.item} key={rowIdx}>
                                <View style={styles.iconWrap}>
                                    {/* <Image source={app.icon} style={styles.icon} /> */}
                                </View>
                                <View style={{flexDirection:'row', alignItems:'center',borderBottomWidth: 1, borderBottomColor: Colors.gray,paddingBottom:8}}>
                                <View style={styles.info}>
                                    <Text style={styles.name} numberOfLines={1}>{app.name}</Text>
                                    <Text style={styles.desc}>{app.desc}</Text>
                                </View>
                                <TouchableOpacity style={styles.downloadBtn}>
                                    <Image source={require('../assets/images/download.png')} style={styles.downloadIcon} />
                                </TouchableOpacity></View>
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Recommended

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#41724B',
		borderRadius: 16,
		padding: 16,
		margin: 16,
        borderWidth:1,
        borderColor: Colors.green
	},
	title: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 12,
		marginBottom: 12,
	},
	scrollContent: {
		paddingRight: 16,
	},
	row: {
		flexDirection: 'row',
		marginBottom: 18,
	},
	item: {
		width: 160,
		backgroundColor: 'transparent',
		borderRadius: 12,
		marginRight: 16,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 8,
	},
	iconWrap: {
		width: 48,
		height: 48,
		borderRadius: 12,
		backgroundColor: '#2d4d36',
		marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		width: 44,
		height: 44,
		borderRadius: 12,
	},
	info: {
		width: 90,
	},
	name: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 13,
	},
	desc: {
		color: '#e0e0e0',
		fontSize: 7,
		marginTop: 2,
	},
	downloadBtn: {
		marginLeft: 8,
		padding: 6,
		borderRadius: 16,
		backgroundColor: 'transparent',
	},
	downloadIcon: {
		width: 18,
		height: 18,
        tintColor:Colors.green
	},
	column: {
		flexDirection: 'column',
		marginRight: 16,
	},
})
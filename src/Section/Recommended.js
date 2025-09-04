import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Animated } from 'react-native'
import Colors from '../constants/Colors';

const apps = [
	{ name: 'Tiktok', desc: 'Create, share, and discover short videos set to music.', icon: null },
	{ name: 'Clas of Clan', desc: 'Create, share, and discover short videos set to music.', icon: null },
	{ name: 'Facebook', desc: 'Create, share, and discover short videos set to music.', icon: null },
	{ name: 'Line', desc: 'Create, share, and discover short videos set to music.', icon: null },
	{ name: 'Survivor', desc: 'Create, share, and discover short videos set to music.', icon: null },
	{ name: 'HayDay', desc: 'Create, share, and discover short videos set to music.', icon: null },
	{ name: 'Survivor', desc: 'Create, share, and discover short videos set to music.', icon: null },
	{ name: 'HayDay', desc: 'Create, share, and discover short videos set to music.', icon: null },
	{ name: 'Survivor', desc: 'Create, share, and discover short videos set to music.', icon: null },
	{ name: 'HayDay', desc: 'Create, share, and discover short videos set to music.', icon: null },
]

const columns = [];
for (let i = 0; i < apps.length; i += 3) {
    columns.push(apps.slice(i, i + 3));
}

const Recommended = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const scrollRef = useRef(null);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);
    const offsetRef = useRef(0);

    const startAutoScroll = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        
        intervalRef.current = setInterval(() => {
            const itemWidth = 160 + 16;
            const maxOffset = itemWidth * columns.length - 320;
            
            offsetRef.current += 0.6;
            if (offsetRef.current > maxOffset) offsetRef.current = 0;
            
            if (scrollRef.current) {
                scrollRef.current.scrollTo({ x: offsetRef.current, animated: false });
            }
        }, 1); // cuộn mượt hơn với khoảng thời gian nhỏ hơn
    };

    const stopAutoScroll = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const onScrollBeginDrag = () => {
        // Người dùng bắt đầu vuốt - dừng auto scroll
        stopAutoScroll();
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const onScrollEndDrag = () => {
        // Người dùng thả tay - sau 1 giây sẽ tiếp tục auto scroll
        timeoutRef.current = setTimeout(() => {
            startAutoScroll();
        }, 1000);
    };

    const onScroll = (event) => {
        // Cập nhật offset hiện tại khi người dùng cuộn
        offsetRef.current = event.nativeEvent.contentOffset.x;
    };

    useEffect(() => {
        startAutoScroll();
        
        return () => {
            stopAutoScroll();
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recommended by KenhTao</Text>
            <ScrollView
                ref={scrollRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                scrollEnabled={true} // cho phép người dùng cuộn
                onScrollBeginDrag={onScrollBeginDrag}
                onScrollEndDrag={onScrollEndDrag}
                onScroll={onScroll}
                scrollEventThrottle={16}
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
		margin: 16,
        borderWidth:1,
        borderColor: Colors.green,
		paddingTop: 10,
		paddingBottom: 5,
	},
	title: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 9,
		marginBottom: 3,
		marginLeft: 10,
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
		width: 80,
	},
	name: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 13,
	},
	desc: {
		color: '#e0e0e0',
		fontSize: 6,
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
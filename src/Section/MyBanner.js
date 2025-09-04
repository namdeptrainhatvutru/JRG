import { Dimensions, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Colors from '../constants/Colors';

const bannerData = [
    {
        banner: require('../assets/images/banner1.png'),
        thumb: require('../assets/images/banner1.png'),
        name: 'New Game 1',
        downloadLink: 'https://example.com/1'
    },
    {
        banner: require('../assets/images/banner2.png'),
        thumb: require('../assets/images/banner2.png'),
        name: 'New Game 2',
        downloadLink: 'https://example.com/2'
    },
    {
        banner: require('../assets/images/banner1.png'),
        thumb: require('../assets/images/banner1.png'),
        name: 'New Game 3',
        downloadLink: 'https://example.com/3'
    },
];

const loopImages = [
    bannerData[bannerData.length - 1].banner,
    ...bannerData.map(b => b.banner),
    bannerData[0].banner,
];
const { width } = Dimensions.get('window');

const MyBanner = () => {
    const scrollRef = useRef(null);
    const [index, setIndex] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            let nextIndex = index + 1;
            scrollRef.current?.scrollTo({ x: nextIndex * width, animated: true });
            setIndex(nextIndex);
        }, 3000);

        return () => clearInterval(timer);
    }, [index]);

    const onScroll = (e) => {
        let newIndex = Math.round(e.nativeEvent.contentOffset.x / width);

        if (newIndex === loopImages.length - 1) {
            scrollRef.current?.scrollTo({ x: width, animated: false });
            setIndex(1);
        }
        else if (newIndex === 0) {
            scrollRef.current?.scrollTo({ x: (loopImages.length - 2) * width, animated: false });
            setIndex(loopImages.length - 2);
        } else {
            setIndex(newIndex);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            scrollRef.current?.scrollTo({ x: width, animated: false });
        }, 10);
    }, []);

    const handleArrow = (direction) => {
        let nextIndex = direction === 'right' ? index + 1 : index - 1;
        scrollRef.current?.scrollTo({ x: nextIndex * width, animated: true });
        setIndex(nextIndex);
    };

    // Sửa lại index để lấy đúng dữ liệu
    const currentData = bannerData[(index - 1 + bannerData.length) % bannerData.length];

    return (
        <View style={styles.bannerContainer}>
            <TouchableOpacity style={styles.arrowLeft} onPress={() => handleArrow('left')}>
                <Image
                    source={require('../assets/images/arrow.png')}
                    style={[styles.arrowIcon, { transform: [{ rotate: '180deg' }] }]}
                />
            </TouchableOpacity>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                style={styles.bannerScroll}
                ref={scrollRef}
                onScroll={onScroll}
                scrollEventThrottle={16}
            >
                {loopImages.map((img, idx) => (
                    <Image key={idx} style={styles.banner} source={img} />
                ))}
            </ScrollView>
            <TouchableOpacity style={styles.arrowRight} onPress={() => handleArrow('right')}>
                <Image
                    source={require('../assets/images/arrow.png')}
                    style={styles.arrowIcon}
                />
            </TouchableOpacity>
            <View style={{position: 'absolute', bottom: 10, left: 25, right: 25, flexDirection:'row', alignItems:'center', padding:5, borderRadius:5, justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', alignItems:'center', flex: 1}}>
                    <Image style={{width:30,height:30,borderRadius:5}} source={currentData.thumb}/>
                    <Text style={{color:'#fff', fontWeight:'bold', fontSize:13,marginLeft:10}}>{currentData.name}</Text>
                </View>
                <TouchableOpacity style={{backgroundColor:Colors.green,paddingHorizontal:10,borderRadius:5,paddingVertical:5}}>
                    <Text style={{color:'#fff', fontWeight:'bold',fontSize:9}}>Download</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.dotContainer}>
                {bannerData.map((_, i) => (
                    <View
                        key={i}
                        style={[
                            styles.dot,
                            index === i + 1 ? styles.dotActive : null
                        ]}
                    />
                ))}
            </View>
        </View>
    )
}

export default MyBanner

const styles = StyleSheet.create({
    bannerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    bannerScroll: {
        marginTop: 5,
    },
    banner: {
        width: width,
        height: 180,
        resizeMode: 'cover',
    },
    arrowLeft: {
        position: 'absolute',
        left: 10,
        top: 90,
        zIndex: 2,
        padding: 6,
    },
    arrowRight: {
        position: 'absolute',
        right: 10,
        top: 90,
        zIndex: 2,
        padding: 6,
    },
    arrowIcon: {
        width: 24,
        height: 24,
        tintColor: '#ffffffff',
    },
    dotContainer: {
        position: 'absolute',
        bottom: 8,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    dot: {
        width: 5,
        height: 5,
        borderRadius: 4,
        backgroundColor: '#ffffffff',
        marginHorizontal: 4,
    },
    dotActive: {
        backgroundColor: Colors.primary,
        width: 16,
    },
})
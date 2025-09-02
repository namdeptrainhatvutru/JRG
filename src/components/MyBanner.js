import { Dimensions, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Colors from '../constants/Colors';

const bannerImages = [
    require('../assets/images/banner1.png'),
    require('../assets/images/banner2.png'),
    require('../assets/images/banner1.png'),
];
const loopImages = [
    bannerImages[bannerImages.length - 1],
    ...bannerImages,
    bannerImages[0],
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
            <View style={{position: 'absolute', bottom: 10, left: 25,flexDirection:'row', alignItems:'center', padding:5, borderRadius:5}}>
                <Image style={{width:40,height:40,borderRadius:5}} source={require('../assets/images/banner1.png')}/>
                <Text style={{color:'#fff', fontWeight:'bold', fontSize:16,marginLeft:10}}>New Game</Text>
                <TouchableOpacity style={{marginLeft: 150, backgroundColor:Colors.green,padding:8,borderRadius:8}}>
                    <Text style={{color:'#fff', fontWeight:'bold'}}>Download</Text>
                </TouchableOpacity>
            </View>
            {/* Dot indicator giống MyBanner2 */}
            <View style={styles.dotContainer}>
                {bannerImages.map((_, i) => (
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
        height: 200,
        resizeMode: 'cover',
    },
    arrowLeft: {
        position: 'absolute',
        left: 10,
        top: 95,
        zIndex: 2,
        backgroundColor: '#ffffff88',
        borderRadius: 20,
        padding: 6,
    },
    arrowRight: {
        position: 'absolute',
        right: 10,
        top: 95,
        zIndex: 2,
        backgroundColor: '#ffffff88',
        borderRadius: 20,
        padding: 6,
    },
    arrowIcon: {
        width: 24,
        height: 24,
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
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ffffffff',
        marginHorizontal: 4,
    },
    dotActive: {
        backgroundColor: Colors.primary,
        width: 16,
    },
})
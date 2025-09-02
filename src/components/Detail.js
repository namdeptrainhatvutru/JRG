import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';

const Detail = () => {
    return (
        <View style={{ flex: 1 }}>
            {/* ScrollView chứa content */}
            <ScrollView style={{ backgroundColor: '#fff' }}>
                <Image
                    style={{ width: '100%', height: 200 }}
                    source={require('../assets/images/banner1.png')}
                />
                {/* thêm content bên dưới cho dễ test */}
                <View >
                    <View>
                        <View style={styles.topRightIcon} />

                        {/* Icon overlay */}
                        <View style={styles.iconWrapper}>
                            <MaterialCommunityIcons
                                name="shield-check-outline"
                                size={24}
                                color="#fff"
                            />
                        </View>
                        <View style={styles.iconContainer}>
                            <Image
                                style={styles.icon}
                                source={require('../assets/images/facebook.png')}
                            />
                            <View style={styles.contentContainer}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: 'black', fontSize: 15, fontWeight: '900' }}>Facebook</Text>
                                    <View style={styles.tagLabel}>
                                        <Text style={styles.tagText}>IPA</Text>
                                    </View>
                                    <View style={styles.tagLabel}>
                                        <Text style={styles.tagText}>APK</Text>
                                    </View>
                                    <View style={styles.tagLabel}>
                                        <Text style={styles.tagText}>ZIP</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 3 }}>
                                        <Text style={{ color: Colors.yellow, fontSize: 6 }}>⭐️5.0</Text>
                                        <Text style={{ color: Colors.gray, marginLeft: 5, fontSize: 6 }}>by Support</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 3 }}>
                                        <Text style={{ color: Colors.green, fontSize: 6, backgroundColor: 'rgba(106, 242, 163, 0.5)', padding: 5, borderRadius: 5 }}>Game crack</Text>
                                        <Text style={{ color: Colors.gray, marginLeft: 5, fontSize: 6 }}>Support android 5+</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 3 }}>
                                        <Text style={{ color: Colors.black, fontSize: 7, backgroundColor: '#dddadaff', padding: 5, borderRadius: 2, fontWeight: 'bold' }}>REQUEST</Text>
                                        <View style={{ borderWidth: 0.5, padding: 1, marginLeft: 5, borderRadius: 3, borderColor: '#6a6a6aff', flexDirection: 'row' }}>
                                            <View>
                                                <MaterialCommunityIcons name="google-play" size={12} />
                                            </View>
                                            <View>
                                                <Text style={{ color: Colors.gray, marginLeft: 5, fontSize: 4 }}>Get it on</Text>
                                                <Text style={{ color: Colors.black, marginLeft: 5, fontSize: 6 }}>Google Play</Text>
                                            </View>

                                        </View>
                                    </View>
                                    <Text style={{ fontSize: 7 }}>only Support device root</Text>
                                </View>

                            </View>
                            <View style={styles.buttonContainer}>
                                <View style={styles.buttonRow}>
                                    <TouchableOpacity style={styles.downloadButton}>
                                        <MaterialCommunityIcons name="cloud-download-outline" size={14} color="#fff" />
                                        <Text style={styles.downloadButtonText}>FILE APK</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.downloadButton}>
                                        <MaterialCommunityIcons name="cloud-download-outline" size={14} color="#fff" />
                                        <Text style={styles.downloadButtonText}>FILE ZIP</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.editButton}>
                                    <Text style={styles.editButtonText}>EDIT FILE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ height: 1, backgroundColor: '#dddadaff' }} />
                        
                        <View style={styles.infoRow}>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Version</Text>
                                <Text style={styles.infoValue}>v1.5.7</Text>
                            </View>
                            <View style={styles.infoDivider} />
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Size</Text>
                                <Text style={styles.infoValue}>435.93MB</Text>
                            </View>
                            <View style={styles.infoDivider} />
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Category</Text>
                                <Text style={styles.infoValue}>Games</Text>
                            </View>
                            <View style={styles.infoDivider} />
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Downloads</Text>
                                <Text style={styles.infoValue}>1923</Text>
                            </View>
                            <View style={styles.infoDivider} />
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Updated</Text>
                                <Text style={styles.infoValue}>3 days ago</Text>
                            </View>
                        </View>

                    </View>

                </View>
            </ScrollView>

            {/* Header overlay */}
            <View style={styles.header}>
                <View style={styles.circle}>
                    <Feather name="arrow-left" size={24} color="#fff" />
                </View>
                <View>
                    <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>Chi tiết</Text>
                </View>
                <View style={styles.circle}>
                    <MaterialCommunityIcons name="heart-outline" size={24} color="#fff" />
                </View>
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: 'rgba(17, 190, 89, 0.5)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,

        position: 'absolute',  // cho header nổi lên
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,            // nổi lên trên cùng
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#fff2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 85,
        height: 85, // Adjusted to match content height
        borderRadius: 13,
    },
    topRightIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 0,
        height: 0,
        borderLeftWidth: 70,      // chiều rộng tam giác
        borderTopWidth: 60,    // chiều cao tam giác
        borderLeftColor: 'transparent',
        borderTopColor: '#0098f6ff', // màu xanh
    },
    iconWrapper: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
    iconContainer: {
        width: '100%',
        flexDirection: 'row',
        padding: 20,
        paddingBottom: 10,
        alignItems: 'stretch',
    },
    contentContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'space-between',
    },
    tagLabel: {
        marginLeft: 8,
        height: 15,
        borderWidth: 1,
        borderColor: Colors.green,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    tagText: {
        color: Colors.green,
        fontSize: 8,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        top: 40,
        right: 20,
        width: '45%',
        alignItems: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    downloadButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginHorizontal: 5,
        padding: 3,
    },
    downloadButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 4,
        fontSize: 10,
    },
    editButton: {
        backgroundColor: '#F06292',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        borderRadius: 6,
        marginTop: 5
    },
    editButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 10,
    },
    infoRow: {
        flexDirection: 'row',
        padding: 10,
    },
    infoItem: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 3
    },
    infoLabel: {
        fontSize: 11,
        color: Colors.gray,
    },
    infoValue: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    infoDivider: {
        width: 1,
        backgroundColor: '#dddadaff',
    },
})

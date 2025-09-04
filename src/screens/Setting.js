import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MyHeader from '../Section/MyHeader'
import LinearGradient from 'react-native-linear-gradient'

const SettingItem = ({ icon, title, IconComponent = Icon }) => {
    return (
        <TouchableOpacity style={styles.settingItem}>
            <IconComponent name={icon} size={20} color="#333" style={styles.itemIcon} />
            <Text style={styles.itemText}>{title}</Text>
        </TouchableOpacity>
    )
}

const SettingSection = ({ title, children }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View style={styles.sectionItems}>
                {children}
            </View>
        </View>
    )
}

const Setting = () => {
    return (
        <View style={{ flex: 1 }}>
            <MyHeader
                onPressUser={() => { }}
                onPressAPK={() => { }}
                onPressSearch={() => { }}
                onPressBell={() => { }}
                bellBadge={1}
            />

            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.container}>


                {/* Banner */}
                <LinearGradient colors={['#d10063', '#13000c']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    locations={[0, 2]}
                    style={styles.banner}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../assets/images/Jrgaming.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                        <View>
                            <Text style={styles.logoText}>JRGaming</Text>
                            <Text style={styles.version}>V1.0.0</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.updateButton}>
                        <Text style={styles.updateText}>Check for Update</Text>
                    </TouchableOpacity>
                </LinearGradient>

                {/* Categories */}
                <View style={styles.categories}>
                    <LinearGradient colors={['#f50100', '#000000ff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0, 2]}
                        style={styles.categoryButton}>
                        <TouchableOpacity>
                            <Text style={styles.categoryText}>NSFW 18+</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient colors={['#000000ff', '#04cdf9']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0, 2]}
                        style={styles.categoryButton}>
                        <TouchableOpacity>
                            <Text style={styles.categoryText}>UPVIDEO 18+</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                {/* Settings */}
                <SettingSection title="Setting">
                    <View style={styles.settingRow}>
                        <SettingItem icon="translate" title="Language" />
                        <SettingItem icon="palette" title="Theme Setup" IconComponent={MaterialIcons} />
                    </View>
                    <View style={styles.settingRow}>
                        <SettingItem icon="dots-horizontal" title="More" />
                        <SettingItem icon="cog" title="Change Icon" />
                    </View>
                </SettingSection>
                <View style={{ height: 2, backgroundColor: '#f0f0f0', marginBottom: 10 }} />

                {/* Account */}
                <SettingSection title="Account">
                    <TouchableOpacity style={styles.settingItemFull}>
                        <Icon name="account" size={20} color="#333" style={styles.itemIcon} />
                        <Text style={styles.itemText}>Account</Text>
                    </TouchableOpacity>
                    <View style={{ height: 10 }} />
                    <TouchableOpacity style={styles.settingItemFull}>
                        <Icon name="cart" size={20} color="#333" style={styles.itemIcon} />
                        <Text style={styles.itemText}>My Order</Text>
                    </TouchableOpacity>
                    <View style={{ height: 10 }} />
                    <TouchableOpacity style={styles.settingItemFull}>
                        <Icon name="heart" size={20} color="#333" style={styles.itemIcon} />
                        <Text style={styles.itemText}>My Favorite</Text>
                    </TouchableOpacity>
                </SettingSection>
                <View style={{ height: 2, backgroundColor: '#f0f0f0', marginBottom: 10 }} />

                {/* Security */}
                <SettingSection title="Sercurity">
                    <View style={styles.settingRow}>
                        <SettingItem icon="shield" title="Password 18+" />
                        <SettingItem icon="key" title="Change Icon" IconComponent={FontAwesome5} />
                    </View>
                    <View style={styles.settingRow}>
                        <SettingItem icon="fingerprint" title="Password App" />
                        <SettingItem icon="trash" title="Clear Cache" IconComponent={FontAwesome5} />
                    </View>
                </SettingSection>
                <View style={{ height: 2, backgroundColor: '#f0f0f0', marginBottom: 10 }} />
                {/* More */}
                <SettingSection title="More">
                    <View style={styles.settingRow}>
                        <SettingItem icon="wifi" title="Scan Location" IconComponent={FontAwesome5} />
                        <SettingItem icon="video" title="Upload Video" IconComponent={Feather} />
                    </View>
                    <View style={styles.settingRow}>
                        <SettingItem icon="image" title="Upload Image" IconComponent={Feather} />
                        <SettingItem icon="upload" title="Upload File" IconComponent={Feather} />
                    </View>
                </SettingSection>
                <View style={{ height: 2, backgroundColor: '#f0f0f0', marginBottom: 10 }} />

                {/* Support */}
                <SettingSection title="Support">
                    <View style={styles.settingRow}>
                        <SettingItem icon="file-document" title="Rules" />
                        <SettingItem icon="apps" title="Source App" />
                    </View>
                    <View style={styles.settingRow}>
                        <SettingItem icon="headphones" title="Contact Support" />
                        <SettingItem icon="apple" title="iOS Coming" IconComponent={FontAwesome} />
                    </View>
                </SettingSection>
                <View style={{ height: 2, backgroundColor: '#f0f0f0', marginBottom: 10 }} />

                {/* Footer Logo */}
                <View style={styles.footer}>
                    <View style={{alignItems:'flex-start', width:'100%',padding:10}}>
                    <Image
                        source={require('../assets/images/Jrgaming.png')}
                        style={styles.footerLogo}
                        resizeMode="contain"
                    />
                    <Text style={styles.footerText}>Discover what you want easier, faster and safer.</Text>
                    </View>
                    <Text style={styles.groupText}>JOIN MY GROUP</Text>

                    <View style={styles.socialIcons}>
                        <TouchableOpacity style={styles.socialButton}>
                            <FontAwesome name="facebook" size={24} color="#3b5998" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <FontAwesome name="telegram" size={24} color="#0088cc" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <FontAwesome name="instagram" size={24} color="#C13584" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <AntDesign name="twitter" size={24} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <FontAwesome5 name="tiktok" size={24} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <FontAwesome name="youtube-play" size={24} color="#FF0000" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.designBy}>
                        <Text style={styles.designText}>DESIGN BY @QTUNUY</Text>
                    </View>

                    {/* Empty space for bottom tab bar */}
                    <View style={{ height: 70 }} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    banner: {
        backgroundColor: '#3E0628',
        borderRadius: 15,
        padding: 20,
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 10,
    },
    logoText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    version: {
        color: '#ccc',
        fontSize: 14,
    },
    updateButton: {
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    updateText: {
        color: '#000',
        fontWeight: '500',
        fontSize: 10,
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    categoryButton: {
        backgroundColor: '#E41B17',
        borderRadius: 10,
        width: '48%',
        padding: 15,
        alignItems: 'center',
    },
    categoryText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    section: {
        marginBottom: 10,
        paddingHorizontal: 15,
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 10,
    },
    sectionItems: {

    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    settingItem: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 15,
        width: '48%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingItemFull: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 15,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemIcon: {
        marginRight: 10,
    },
    itemText: {
        fontSize: 15,
    },
    footer: {
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 20,
    },
    footerLogo: {
        width: 200,
        height: 50,
    },
    footerText: {
        color: '#666',
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        paddingBottom: 10,
        width: '100%',
        fontSize: 8,
    },
    groupText: {
        fontWeight: 'bold',
        color: '#00B761',
        marginTop: 20,
        marginBottom: 15,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    socialButton: {
        marginHorizontal: 10,
    },
    designBy: {
        backgroundColor: '#FF3E96',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 10,
    },
    designText: {
        color: 'white',
        fontWeight: 'bold',
    },
})
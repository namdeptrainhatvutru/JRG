import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BulletItem from './BulletItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OldVersion from '../Section/OldVersion';
import HotApp from '../Section/HotApp';
import RatingBar from './RatingBar';
import Comment from '../Section/Comment';
import HotScroll from '../Section/HotScroll';

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
const {width} = Dimensions.get('window');

const Detail = () => {
  const [showMoreArr, setShowMoreArr] = useState([false, false, false]);
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(1);

  const handleToggle = idx => {
    setShowMoreArr(arr => arr.map((v, i) => (i === idx ? !v : v)));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      let nextIndex = index + 1;
      scrollRef.current?.scrollTo({x: nextIndex * width, animated: true});
      setIndex(nextIndex);
    }, 3000);

    return () => clearInterval(timer);
  }, [index]);

  const onScroll = e => {
    let newIndex = Math.round(e.nativeEvent.contentOffset.x / width);

    if (newIndex === loopImages.length - 1) {
      scrollRef.current?.scrollTo({x: width, animated: false});
      setIndex(1);
    } else if (newIndex === 0) {
      scrollRef.current?.scrollTo({
        x: (loopImages.length - 2) * width,
        animated: false,
      });
      setIndex(loopImages.length - 2);
    } else {
      setIndex(newIndex);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollTo({x: width, animated: false});
    }, 10);
  }, []);

  const handleArrow = direction => {
    let nextIndex = direction === 'right' ? index + 1 : index - 1;
    scrollRef.current?.scrollTo({x: nextIndex * width, animated: true});
    setIndex(nextIndex);
  };

  return (
    <View style={{flex: 1}}>
      {/* ScrollView chứa content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        style={{backgroundColor: '#fff'}}>
        {/* Thay thế Image tĩnh bằng banner tự động */}
        <View style={styles.bannerContainer}>
          <TouchableOpacity
            style={styles.arrowLeft}
            onPress={() => handleArrow('left')}>
            <Image
              source={require('../assets/images/arrow.png')}
              style={[styles.arrowIcon, {transform: [{rotate: '180deg'}]}]}
            />
          </TouchableOpacity>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.bannerScroll}
            ref={scrollRef}
            onScroll={onScroll}
            scrollEventThrottle={16}>
            {loopImages.map((img, idx) => (
              <Image key={idx} style={styles.banner} source={img} />
            ))}
          </ScrollView>
          <TouchableOpacity
            style={styles.arrowRight}
            onPress={() => handleArrow('right')}>
            <Image
              source={require('../assets/images/arrow.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <View style={styles.dotContainer}>
            {bannerImages.map((_, i) => (
              <View
                key={i}
                style={[styles.dot, index === i + 1 ? styles.dotActive : null]}
              />
            ))}
          </View>
        </View>

        <View>
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
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{color: 'black', fontSize: 10, fontWeight: '900'}}>
                    Facebook
                  </Text>
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
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 3,
                    }}>
                    <Image
                      style={{width: 7, height: 7, marginRight: 3}}
                      source={require('../assets/images/star-inline.png')}
                    />
                    <Text style={{color: Colors.yellow, fontSize: 6}}>5.0</Text>
                    <Text
                      style={{color: Colors.gray, marginLeft: 5, fontSize: 6}}>
                      by Support
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 3,
                    }}>
                    <Text
                      style={{
                        color: Colors.green,
                        fontSize: 4,
                        backgroundColor: 'rgba(106, 242, 163, 0.5)',
                        padding: 5,
                        borderRadius: 5,
                        paddingHorizontal: 7,
                        marginRight: 5,
                      }}>
                      Game crack
                    </Text>
                    <Ionicons
                      name="hardware-chip"
                      size={9}
                      style={{marginLeft: 5}}
                    />
                    <Text
                      style={{color: Colors.gray, marginLeft: 2, fontSize: 4}}>
                      Support android 5+
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 3,
                    }}>
                    <Text
                      style={{
                        color: Colors.black,
                        fontSize: 4,
                        backgroundColor: '#dddadaff',
                        padding: 3,
                        borderRadius: 2,
                        fontWeight: 'bold',
                        paddingHorizontal: 7,
                      }}>
                      REQUEST
                    </Text>
                    <View
                      style={{
                        borderWidth: 0.5,
                        padding: 1,
                        marginLeft: 5,
                        borderRadius: 3,
                        borderColor: '#6a6a6aff',
                        flexDirection: 'row',
                      }}>
                      <View>
                        <MaterialCommunityIcons name="google-play" size={12} />
                      </View>
                      <View>
                        <Text
                          style={{
                            color: Colors.gray,
                            marginLeft: 5,
                            fontSize: 3,
                          }}>
                          Get it on
                        </Text>
                        <Text
                          style={{
                            color: Colors.black,
                            marginLeft: 5,
                            fontSize: 4,
                          }}>
                          Google Play
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Text style={{fontSize: 4}}>only Support device root</Text>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.buttonRow}>
                  <TouchableOpacity style={styles.downloadButton}>
                    <MaterialCommunityIcons
                      name="cloud-download-outline"
                      size={14}
                      color="#fff"
                    />
                    <Text style={styles.downloadButtonText}>FILE APK</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.downloadButton}>
                    <MaterialCommunityIcons
                      name="cloud-download-outline"
                      size={14}
                      color="#fff"
                    />
                    <Text style={styles.downloadButtonText}>FILE ZIP</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.editButton}>
                  <Text style={styles.editButtonText}>EDIT FILE</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{height: 1, backgroundColor: '#dddadaff'}} />

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
            <View style={{height: 1, backgroundColor: '#dddadaff'}} />
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',paddingVertical:4}}>
              <View style={{flexDirection: 'row',paddingHorizontal:10,alignItems:'center'}}>
                <View style={styles.infomxh}>
                  <MaterialCommunityIcons name="facebook" size={13} />
                </View>
                <View style={styles.infomxh}>
                  <FontAwesome5 name="discord" size={13} />
                </View>
                <View style={styles.infomxh}>
                  <MaterialCommunityIcons name="instagram" size={13} />
                </View>
                <View style={styles.infomxh}>
                  <FontAwesome5 name="twitter" size={13} />
                </View>
                <View style={styles.infomxh}>
                  <FontAwesome5 name="tiktok" size={13} />
                </View>
                <View style={styles.infomxh}>
                  <MaterialCommunityIcons name="facebook-messenger" size={13} />
                </View>
                <View style={styles.infomxh}>
                  <MaterialCommunityIcons name="youtube" size={13} />
                </View>
                <View style={styles.infomxh}>
                  <MaterialCommunityIcons name="twitch" size={13} />
                </View>
                <View
                  style={[
                    styles.infomxh,
                    {marginLeft: 1, backgroundColor: '#dddadaff'},
                  ]}>
                  <Text style={{fontSize: 7}}>4.6k</Text>
                </View>
              </View>
              
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#dddadaff',
                  borderRadius: 3,
                  padding: 2,
                  paddingHorizontal: 9,
                  marginRight: 10,
                }}>
                <Text style={{fontSize: 9}}>+Follow</Text>
              </View>
            </View>
            <View style={{height: 1, backgroundColor: '#dddadaff'}} />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin: 10,
                  marginBottom: 5,
                }}>
                <Text style={{borderBottomWidth: 1, borderColor: '#dddadaff'}}>
                  Short Description
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text>English</Text>
                  <Image
                    style={{
                      width: 15,
                      height: 15,
                      tintColor: '#777777ff',
                      marginLeft: 2,
                    }}
                    source={require('../assets/images/downarrow.png')}
                  />
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: 5,
                  backgroundColor: '#f2f2f2',
                  padding: 10,
                  margin: 10,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'black', fontSize: 9.5}}>
                  Hãy tham gia cùng hàng triệu người chơi trên khắp thế giới xây
                  dựng làng, gây dựng hội và tranh tài trong các cuộc Hội Chiến
                  hoành tráng!
                </Text>
              </View>

              {/*MOD INFOR*/}
              {['MOD infor 1', 'MOD infor 2', 'MOD infor 3'].map(
                (title, idx) => (
                  <Pressable
                    key={idx}
                    onPress={() => handleToggle(idx)}
                    style={{paddingHorizontal: 10, marginVertical: 4}} // thêm marginVertical
                  >
                    <View
                      style={{
                        backgroundColor: '#F2F1F6',
                        padding: 6,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        borderWidth: 1,
                        borderColor: '#dddadaff',
                      }}>
                      <Text
                        style={{
                          color: '#42a7ffff',
                          fontSize: 12,
                          fontWeight: '500',
                        }}>
                        {title}
                      </Text>
                      <Text
                        style={{
                          color: '#42a7ffff',
                          fontSize: 12,
                          fontWeight: '500',
                        }}>
                        {showMoreArr[idx] ? '-' : '+'}
                      </Text>
                    </View>
                    {showMoreArr[idx] && (
                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: '#dddadaff',
                          borderTopWidth: 0,
                          padding: 3,
                          paddingLeft: 9,
                          backgroundColor: '#FFFFFF',
                        }}>
                        <BulletItem color="black">hihi</BulletItem>
                        <BulletItem color="black">hihi</BulletItem>
                      </View>
                    )}
                  </Pressable>
                ),
              )}

              {/* What's new Section */}
              <View style={{margin: 10}}>
                <Text
                  style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
                  What's new
                </Text>
                <View
                  style={{
                    backgroundColor: '#D4EDDD',
                    padding: 10,
                    marginTop: 5,
                    borderRadius: 5,
                  }}>
                  <BulletItem color="#3F7648">New update 1</BulletItem>
                  <BulletItem color="#3F7648">New update 2</BulletItem>
                  <BulletItem color="#3F7648">New update 3</BulletItem>
                </View>
              </View>
            </View>
            
            <View style={styles.line} />

            {/* Screenshots Section */}
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontWeight: 'bold',
                  margin: 10,
                }}>
                Clash of clans ScreenShots
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginLeft: 10}}>
                {bannerImages.map((img, i) => (
                  <Image
                    key={i}
                    source={img}
                    style={{width: 250, height: 150, marginRight: 10}}
                  />
                ))}
              </ScrollView>
            </View>
            <View style={[styles.line, {marginTop: 6}]} />

            {/* Old Version Section */}
            <View style={{margin: 10}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginBottom: 5,
                }}>
                Old Version of Clash of Clans
              </Text>
              <OldVersion />
            </View>
            <View style={styles.line} />
            <View style={{margin: 10}} />

            {/* Hot App Section */}
            <HotApp name="Games like Clash of Clans" count={10} />
            <HotApp name="Get more from Supercell" count={10} />

            {/* User Review Section */}
            <View style={{padding: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 5,
                }}>
                <Text
                  style={{color: 'black', fontSize: 13, fontWeight: 'bold'}}>
                  User review
                </Text>
                <Text style={{color: Colors.blue}}>+Review</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: -5,
                }}>
                <Text style={{color: '#909090ff', fontSize: 8}}>
                  Total Reviews 12822 - English: 2978
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 5,
                  alignItems: 'center',
                }}>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: 11}}>Rating</Text>
                  <Text
                    style={{fontWeight: '900', fontSize: 40, color: 'black'}}>
                    9.1
                  </Text>
                  <Text>13k Reviews</Text>
                </View>
                <View style={{width: '70%', marginLeft: 15}}>
                  <RatingBar label="5" value={80} max={100} color="#45C54D" />
                  <RatingBar label="4" value={10} max={100} color="#87C645" />
                  <RatingBar label="3" value={5} max={100} color="#FAD753" />
                  <RatingBar label="2" value={20} max={100} color="#FEB24D" />
                  <RatingBar label="1" value={3} max={100} color="#E16233" />
                </View>
              </View>
              <View style={{marginTop: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: '#dddadaff',
                    padding: 5,
                  }}>
                  <Image
                    style={{tintColor: Colors.yellow, marginRight: 3}}
                    source={require('../assets/images/star.png')}
                  />
                  <Image
                    style={{tintColor: Colors.yellow, marginRight: 3}}
                    source={require('../assets/images/star.png')}
                  />
                  <Image
                    style={{tintColor: Colors.yellow, marginRight: 3}}
                    source={require('../assets/images/star.png')}
                  />
                  <Image
                    style={{tintColor: Colors.yellow, marginRight: 3}}
                    source={require('../assets/images/star.png')}
                  />
                  <Image
                    style={{tintColor: Colors.yellow, marginRight: 3}}
                    source={require('../assets/images/star.png')}
                  />
                </View>

                <TextInput
                  multiline
                  placeholderTextColor="#dddadaff"
                  style={{
                    borderWidth: 1,
                    borderColor: '#dddadaff',
                    padding: 5,
                    borderTopWidth: 0,
                    height: 150,
                  }}
                  placeholder="What do you think?"
                />
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: '#dddadaff',
                    padding: 5,
                    backgroundColor: '#F2F5FA',
                  }}>
                  <FontAwesome5
                    style={{marginLeft: 10}}
                    name="smile-beam"
                    size={20}
                  />
                  <FontAwesome5
                    style={{marginLeft: 10}}
                    name="youtube"
                    size={20}
                  />
                </View>

                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.green,
                    padding: 10,
                    alignItems: 'center',
                    borderRadius: 5,
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white', marginRight: 5}}>Comment</Text>
                  <FontAwesome5 name="telegram" size={15} color={'white'} />
                </TouchableOpacity>
              </View>

              {/* Reviews Section */}
              <View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#dddadaff',
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 10,
                      borderBottomWidth: 2,
                      paddingBottom: 5,
                      borderColor: Colors.blue,
                    }}>
                    <Text style={{fontSize: 12, color: Colors.blue}}>
                      Reviews
                    </Text>
                    <FontAwesome5
                      size={10}
                      name="chevron-down"
                      style={{marginLeft: 5}}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: 150,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10,
                        paddingBottom: 5,
                      }}>
                      <Text style={{fontSize: 12}}>English</Text>
                      <FontAwesome5
                        size={10}
                        name="chevron-down"
                        style={{marginLeft: 5}}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10,
                        paddingBottom: 5,
                      }}>
                      <Text style={{fontSize: 12}}>Top Reviews</Text>
                      <FontAwesome5
                        size={10}
                        name="chevron-down"
                        style={{marginLeft: 5}}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 5,
                    borderBottomWidth: 1,
                    borderColor: '#dddadaff',
                    paddingBottom: 10,
                  }}>
                  <Comment />
                </View>
              </View>
            </View>
            <HotScroll name="Hot games in last 24Hours" />
          </View>
        </View>
        <View style={styles.footer}>
          <View style={{alignItems: 'flex-start', width: '100%', padding: 10}}>
            <Image
              source={require('../assets/images/Jrgaming.png')}
              style={styles.footerLogo}
              resizeMode="contain"
            />
            <Text style={styles.footerText}>
              Discover what you want easier, faster and safer.
            </Text>
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
          <View style={{height: 70}} />
        </View>
      </ScrollView>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.circle}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </View>
        <View>
          <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold'}}>
            Chi tiết
          </Text>
        </View>
        <View style={styles.circle}>
          <MaterialCommunityIcons name="heart-outline" size={24} color="#fff" />
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(17, 190, 89, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,

    position: 'absolute', // cho header nổi lên
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10, // nổi lên trên cùng
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
    width: 85, // giảm từ 85
    height: 85, // giảm từ 85
    borderRadius: 12, // giảm từ 15
  },
  topRightIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 50, // chiều rộng tam giác
    borderTopWidth: 50, // chiều cao tam giác
    borderLeftColor: 'transparent',
    borderTopColor: '#0098f6ff', // màu xanh
  },
  iconWrapper: {
    position: 'absolute',
    top: 3,
    right: 3,
  },
  iconContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 12, // giảm từ 20
    paddingBottom: 6, // giảm từ 10
    alignItems: 'stretch',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 6, // giảm từ 10
    justifyContent: 'space-between',
  },
  tagLabel: {
    marginLeft: 5, 
    borderWidth: 1,
    borderColor: Colors.green, 
    justifyContent: 'center',
    marginTop: 3,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 1,
  },
  tagText: {
    color: Colors.green,
    fontSize: 6, 
  },
  buttonContainer: {
    position: 'absolute',
    top: 10,
    right: 20,
    width: '45%',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  downloadButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
    padding: 3
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
    marginTop: 5,
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
    paddingLeft: 3,
  },
  infoLabel: {
    fontSize: 5,
    color: Colors.gray,
  },
  infoValue: {
    fontSize: 8,
    fontWeight: 'bold',
    color: 'black',
  },
  infoDivider: {
    width: 1,
    backgroundColor: '#dddadaff',
  },
  infomxh: {
    borderWidth: 1,
    borderColor: '#dddadaff',
    borderRadius: 3,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  bannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  bannerScroll: {},
  banner: {
    width: width,
    height: 180,
    resizeMode: 'cover',
  },
  arrowLeft: {
    position: 'absolute',
    left: 10,
    top: 80,
    zIndex: 2,
    padding: 6,
  },
  arrowRight: {
    position: 'absolute',
    right: 10,
    top: 80,
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
  line: {
    height: 4,
    backgroundColor: '#f2f2f2',
    marginTop: 2,
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
});

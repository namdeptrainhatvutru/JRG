import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = 80; // Fixed width cho mỗi item
const ITEM_MARGIN = 10;

const data = [
  {
    id: 1,
    name: 'Facebook',
    star: '5.0',
    downloadCount: '2,1M',
    image: require('../assets/images/facebook.png'),
  },
  {
    id: 2,
    name: 'Instagram',
    star: '4.8',
    downloadCount: '1,5M',
    image: require('../assets/images/facebook.png'),
  },
  {
    id: 3,
    name: 'WhatsApp',
    star: '4.9',
    downloadCount: '3,2M',
    image: require('../assets/images/facebook.png'),
  },
  {
    id: 4,
    name: 'TikTok',
    star: '4.7',
    downloadCount: '2,8M',
    image: require('../assets/images/facebook.png'),
  },
  {
    id: 5,
    name: 'YouTube',
    star: '4.6',
    downloadCount: '5,1M',
    image: require('../assets/images/facebook.png'),
  },
  {
    id: 6,
    name: 'Telegram',
    star: '4.8',
    downloadCount: '1,2M',
    image: require('../assets/images/facebook.png'),
  },
  {
    id: 7,
    name: 'Discord',
    star: '4.5',
    downloadCount: '800K',
    image: require('../assets/images/facebook.png'),
  },
  {
    id: 8,
    name: 'Spotify',
    star: '4.7',
    downloadCount: '2,3M',
    image: require('../assets/images/facebook.png'),
  },
  {
    id: 9,
    name: 'Netflix',
    star: '4.4',
    downloadCount: '1,8M',
    image: require('../assets/images/facebook.png'),
  },
  {
    id: 10,
    name: 'Twitter',
    star: '4.2',
    downloadCount: '1,1M',
    image: require('../assets/images/facebook.png'),
  },
  {
    id: 11,
    name: 'Snapchat',
    star: '4.3',
    downloadCount: '900K',
    image: require('../assets/images/facebook.png'),
  },
  {
    id: 12,
    name: 'Pinterest',
    star: '4.5',
    downloadCount: '1,3M',
    image: require('../assets/images/facebook.png'),
  },
];

const HotScroll = ({name}) => {
  const nav = useNavigation();

  // Chia data thành từng cột để hiển thị 2 hàng
  const createColumns = () => {
    const columns = [];
    for (let i = 0; i < data.length; i += 2) {
      columns.push([data[i], data[i + 1]].filter(Boolean)); // filter để loại bỏ undefined
    }
    return columns;
  };

  const columns = createColumns();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.title}>{name}</Text>
        <Image
          style={{width: 16, height: 16}}
          source={require('../assets/images/leftarrow.png')}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {columns.map((column, columnIndex) => (
          <View key={columnIndex} style={styles.column}>
            {column.map(item => (
              <Pressable
                key={item.id}
                onPress={() => nav.navigate('Detail')}
                style={styles.itemContainer}>
                <Image style={styles.image} source={item.image} />
                <Text numberOfLines={1} style={styles.nameText}>
                  {item.name}
                </Text>
                <View style={styles.row}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={{width: 8, height: 8}}
                      source={require('../assets/images/star-inline.png')}
                    />
                    <Text style={[styles.textItem, {color: '#d3bb04ff'}]}>
                      {item.star}
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.textItem]}>{item.downloadCount}</Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        ))}
      </ScrollView>

      <View
        style={{height: 5, backgroundColor: '#f2f2f2', marginHorizontal: -20}}
      />
    </View>
  );
};

export default HotScroll;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    marginBottom: 10,
    marginLeft: 10,
  },
  container: {
    paddingTop: 0,
    paddingBottom: 10,
  },
  scrollContainer: {
    paddingRight: 20, // padding cuối để tránh bị cắt
    paddingLeft: 0, // thêm padding trái
  },
  column: {
    marginRight: ITEM_MARGIN,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: ITEM_WIDTH - 10, // Thiết lập chiều rộng cố định cho row
    marginTop: 2,
  },
  image: {
    width: ITEM_WIDTH - 10,
    height: ITEM_WIDTH - 10,
    borderRadius: 15,
    backgroundColor: 'lightgray',
    alignSelf: 'center',
  },
  itemContainer: {
    width: ITEM_WIDTH,
    marginBottom: 5, // giảm từ 10 xuống 5
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    padding: 5,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    marginTop: 5,
  },
  textItem: {
    fontSize: 7,
    color: 'gray',
  },
});

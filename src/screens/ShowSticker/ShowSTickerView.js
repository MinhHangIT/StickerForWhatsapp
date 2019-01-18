import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList, TextInput, Dimensions } from 'react-native';
import I18n from 'react-native-i18n';
import styles from './styles';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');

const data = [
  { img: require('../../assets/images/39/887/887.png') },
  { img: require('../../assets/images/39/888/888.png') },
  { img: require('../../assets/images/39/889/889.png') },
  { img: require('../../assets/images/39/890/890.png') },
  { img: require('../../assets/images/39/891/891.png') },
  { img: require('../../assets/images/39/887/887.png') },
  { img: require('../../assets/images/39/888/888.png') },
  { img: require('../../assets/images/39/889/889.png') },
  { img: require('../../assets/images/39/890/890.png') },
  { img: require('../../assets/images/39/891/891.png') },
  { img: require('../../assets/images/39/887/887.png') },
  { img: require('../../assets/images/39/888/888.png') },
  { img: require('../../assets/images/39/889/889.png') },
  { img: require('../../assets/images/39/890/890.png') },
  { img: require('../../assets/images/39/891/891.png') }
];

class Items extends Component {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.items}>
        <Image source={item.img} style={{ width: 70, height: 70 }} />
      </View>
    );
  }
}

export default class ShowSTickerView extends Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('../../assets/images/ic_Mask.png')} style={styles.mask}>
          <View style={styles.mask_x}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={require('../../assets/images/ic_x.png')} style={styles.x} />
            </TouchableOpacity>
          </View>
          <View style={styles.mask_text}>
            <Image source={require('../../assets/images/39/887/887.png')} style={styles.sticker} />
            <View style={styles.mask_text_content}>
              <Text style={styles.title_icon}>{I18n.t('cookyIcecream')}</Text>
              <Text style={styles.author}>{I18n.t('author')}</Text>
              <Text style={styles.free}>{I18n.t('free')}</Text>
            </View>
          </View>
          <TouchableOpacity>
            <ImageBackground source={require('../../assets/images/ic_Khung_add.png')} style={styles.khung_add}>
              <Text style={{ color: 'white' }}>{I18n.t('addToWhatsApp').toUpperCase()}</Text>
            </ImageBackground>
          </TouchableOpacity>
          <FlatList
            style={{ flex: 1, marginBottom: 8, marginLeft: 5 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            data={data != null ? data.slice() : data}
            keyExtractor={(item, index) => index + ''}
            renderItem={({ item, index }) => {
              return <Items item={item} index={index} {...this.props} openModalSticker={this.openModalSticker} />;
            }}
          />
        </ImageBackground>
      </View>
    );
  }
}

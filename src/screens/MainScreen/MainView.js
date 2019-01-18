import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList, TextInput, Dimensions } from 'react-native';
import I18n from 'react-native-i18n';
import styles from './styles';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');

const data = [
  { img: require('../../assets/images/39/887/887.png') },
  { img: require('../../assets/images/10137/18116/1.png') },
  { img: require('../../assets/images/10145/18314/1.png') },
  { img: require('../../assets/images/10146/18334/1.png') },
  { img: require('../../assets/images/10164/18604/1.png') }
];

const dataBox = [
  {
    icon: require('../../assets/images/39/887/887.png'),
    title: I18n.t('cookyIcecream'),
    author: I18n.t('author'),
    free: I18n.t('free'),
    downloadIcon: require('../../assets/images/ic_dowload.png'),
    downloaded: false
  },
  {
    icon: require('../../assets/images/10137/18116/1.png'),
    title: I18n.t('cookyIcecream'),
    author: I18n.t('author'),
    free: I18n.t('free'),
    downloadIcon: require('../../assets/images/ic_dowload.png'),
    downloaded: false
  },
  {
    icon: require('../../assets/images/10145/18314/1.png'),
    title: I18n.t('cookyIcecream'),
    author: I18n.t('author'),
    free: I18n.t('free'),
    downloadIcon: require('../../assets/images/ic_dowload.png'),
    downloaded: true
  },
  {
    icon: require('../../assets/images/10146/18334/1.png'),
    title: I18n.t('cookyIcecream'),
    author: I18n.t('author'),
    free: I18n.t('free'),
    downloadIcon: require('../../assets/images/ic_dowload.png'),
    downloaded: false
  },
  {
    icon: require('../../assets/images/10164/18604/1.png'),
    title: I18n.t('cookyIcecream'),
    author: I18n.t('author'),
    free: I18n.t('free'),
    downloadIcon: require('../../assets/images/ic_dowload.png'),
    downloaded: false
  },
  {
    icon: require('../../assets/images/10167/18662/1.png'),
    title: I18n.t('cookyIcecream'),
    author: I18n.t('author'),
    free: I18n.t('free'),
    downloadIcon: require('../../assets/images/ic_dowload.png'),
    downloaded: false
  }
];

class Items extends Component {
  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity style={styles.items}>
        <Image source={item.img} style={styles.items_img} resizeMode={'cover'} />
      </TouchableOpacity>
    );
  }
}

class ItemsBox extends Component {
  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity style={styles.item_Box_Touch} onPress={() => this.props.navigation.navigate('ShowSTickerView')}>
        <ImageBackground source={require('../../assets/images/ic_Rectangle_3.png')} style={styles.item_Box}>
          <Image source={item.icon} style={styles.item_Box_icon} resizeMode={'contain'} />
          <View style={styles.item_Box_Text}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.black }}>{item.title}</Text>
            <Text style={{ fontSize: 14, color: Colors.textGray }}>{item.author}</Text>
            <Text style={{ fontSize: 14, color: Colors.gray }}>{item.free}</Text>
          </View>
          {item.downloaded ? (
            <Image source={require('../../assets/images/ic_Group.png')} style={styles.item_Box_down} />
          ) : (
            <TouchableOpacity>
              <Image source={item.downloadIcon} style={styles.item_Box_down} />
            </TouchableOpacity>
          )}
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      downloaded: false
    };
  }
  openModalSticker = () => {
    this.refs.showSticker.open();
  };

  closeModalSticker = () => {
    this.refs.showSticker.close();
  };
  render() {
    return (
      <ImageBackground source={require('../../assets/images/ic_BG.png')} style={{ alignItems: 'center', flex: 1 }}>
        <ImageBackground style={styles.row}>
          <View style={styles.searchBox}>
            <Image source={require('../../assets/images/ic_Search.png')} style={styles.ic_search} />
            <ImageBackground source={require('../../assets/images/ic_Khung_search.png')} style={styles.ic_Khung_Search}>
              <TextInput
                placeholder={I18n.t('whatAreYouLookingFor')}
                style={{ width: '90%', height: 50 }}
                underlineColorAndroid="transparent"
              />
            </ImageBackground>
          </View>
          <Text style={{ fontWeight: 'bold', width: width - 36, fontSize: 18, color: 'black' }}>
            {I18n.t('popular')}
          </Text>

          <FlatList
            style={{ width: width, marginTop: 10, marginLeft: 30 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={true}
            data={data != null ? data.slice() : data}
            keyExtractor={(item, index) => index + ''}
            renderItem={({ item, index }) => {
              return <Items item={item} index={index} {...this.props} />;
            }}
          />
        </ImageBackground>
        <FlatList
          style={{ width: width - 30, marginTop: 10 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={dataBox != null ? dataBox.slice() : dataBox}
          keyExtractor={(item, index) => index + ''}
          renderItem={({ item, index }) => {
            return <ItemsBox item={item} index={index} {...this.props} openModalSticker={this.openModalSticker} />;
          }}
        />
        {/* <Modal
          style={{ width: width - 30, height: 400, zIndex: 10 }}
          visible={true}
          position="center"
          ref={'showSticker'}
          backdropPressToClose={true}
        >
          <View />
        </Modal> */}
      </ImageBackground>
    );
  }
}

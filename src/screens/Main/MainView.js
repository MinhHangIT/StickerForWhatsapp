import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';
import { AIBToolbar, AIBEmptyView } from '../../components';
import { AIBNativeAd, AIBBanner } from '../../libs/AIBAds';
import { startActivityForResult } from '../../utils';

export default class MainView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <AIBToolbar
          title={'This is Title'}
          backCallback={() => {
            alert('back');
          }}
          // right={require('../../assets/images/ic_menu.png')}
          // rightCallback={() => {
          //   rateApp();
          // }}
        />

        <TouchableOpacity
          style={{ position: 'absolute', top: -2, right: 0 }}
          onPress={() => startActivityForResult(this.props.navigation, 'MoreAppsScreen')}
        >
          <LottieView
            style={{ width: 60, height: 60 }}
            source={require('../../assets/lottiefiles/gift_box.json')}
            autoPlay
            loop
          />
        </TouchableOpacity>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <AIBEmptyView />
          <AIBBanner />
        </View>

        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 400 }}>
          <AIBNativeAd />
        </View>
      </View>
    );
  }
}

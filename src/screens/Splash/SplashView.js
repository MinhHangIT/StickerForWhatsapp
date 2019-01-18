import React, { Component } from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity } from 'react-native';

export default class SplashView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Splash</Text>
      </View>
    );
  }
}

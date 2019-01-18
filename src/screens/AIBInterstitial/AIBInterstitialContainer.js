import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import AIBInterstitialView from './AIBInterstitialView';

import { goBack } from '../../utils';

export default class AIBInterstitialScreen extends Component {
  constructor(props) {
    super(props);
  }

  _exitApp = () => {
    BackHandler.exitApp();
  };

  _goBack = () => {
    // goBack(this.props.navigation);
    alert('back');
  };

  render() {
    return <AIBInterstitialView {...this.props} exitApp={this._exitApp} goBack={this._goBack} />;
  }
}

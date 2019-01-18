import React, { Component } from 'react';
import MainView from './MainView';
import { goBack, getParamData } from '../../utils';
export default class MainScreen extends Component {
  constructor(props) {
    super(props);

    // setTimeout(() => {
    //   goBack(this.props.navigation, 'lock', { num: 1 });
    // }, 2000);

    // alert(JSON.stringify(getParamData(this.props.navigation)));
  }

  render() {
    return <MainView {...this.props} />;
  }
}

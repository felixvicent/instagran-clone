import React from 'react';
import { Provider } from 'react-redux';
import {AppRegistry} from 'react-native';
import axios from 'axios'

import Navigator from './src/Navigator';
import {name as appName} from './app.json';

import storeConfig from './src/store/storeConfig';

axios.defaults.baseURL = 'https://lambe-3d371.firebaseio.com/'

const store = storeConfig();

const Redux = () => (
  <Provider store={ store }>
    <Navigator />
  </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);

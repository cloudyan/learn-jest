// Copyright 2004-present Facebook. All Rights Reserved.

import axios from 'axios';
import request from './request';

export function getUserName(userID) {
  return request('/users/' + userID).then(user => user.name);
}

export function all() {
  return axios.get('/user.json').then(resp => resp.data);
}

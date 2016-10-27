'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('testD3App.util', [])
  .factory('Util', UtilService)
  .name;

import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(
  [
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'RCTCxxModule',
  'Warning: Failed child context type',
  'Warning: Failed prop type'
]);

AppRegistry.registerComponent('Shortlyst', () => App);

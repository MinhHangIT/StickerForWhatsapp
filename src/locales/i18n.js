import I18n from 'react-native-i18n';
import vi from './vi';
import en from './en';

I18n.fallbacks = true;

I18n.translations = {
  en,
  vi
};

export default I18n;

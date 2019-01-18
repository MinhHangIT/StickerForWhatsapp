import { showProgressDialog, hideProgressDialog } from './index';
import { AIBInterstitial } from '../libs/AIBAds';
import I18n from '../locales/i18n';

export const clearCallback = callback => {
  AIBInterstitial.removeAllListeners();
  callback();
};

export const showAdInterstitial = (percent, showDialog, callback) => {
  const rd = Math.floor(Math.random() * 100) + 1;
  if (rd <= percent) {
    if (showDialog) {
      showProgressDialog(I18n.t('adInterstitialShowing'));
    }

    AIBInterstitial.addEventListener('adLoaded', () => {
      if (showDialog) {
        hideProgressDialog();
      }
    });
    AIBInterstitial.addEventListener('adFailedToLoad', () => clearCallback(callback));
    AIBInterstitial.addEventListener('adClosed', () => clearCallback(callback));
    AIBInterstitial.showInterstitial(() => {});
  } else {
    callback();
  }
};

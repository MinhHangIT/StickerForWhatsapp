import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

const { width, height } = Dimensions.get('window');

export default (styles = StyleSheet.create({
  items: {
    width: width / 4.9,
    height: width / 4.9,
    backgroundColor: Colors.bg_box,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10
  },
  mask: {
    width: width / 1.2,
    height: (width * 1.542) / 1.2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mask_x: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 80,
    height: 40
  },
  x: { width: width / 19, height: width / 19, marginTop: 10 },
  mask_text: {
    width: width / 1.4,
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  mask_text_content: { width: '75%', height: 50, marginLeft: 10 },
  title_icon: { fontSize: 16, fontWeight: 'bold', color: Colors.black },
  author: { fontSize: 14, color: Colors.textGray },
  free: { fontSize: 14, color: Colors.gray },
  khung_add: {
    width: width / 1.4,
    height: (width * 0.1667) / 1.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  sticker: { width: width / 5, height: 60 }
}));

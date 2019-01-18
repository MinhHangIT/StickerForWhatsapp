import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

const { width, height } = Dimensions.get('window');

export default (styles = StyleSheet.create({
  row: {
    width: width,
    height: (height * 1.2) / 3.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bg_color
  },
  searchBox: {
    flexDirection: 'row',
    width: width - 30,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 25,
    marginBottom: 15
  },
  ic_search: { width: width / 15, height: (width * 0.86) / 15 },
  ic_Khung_Search: {
    width: width / 1.2,
    height: (width * 0.118) / 1.2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  item_Box: {
    flexDirection: 'row',
    width: width / 1.1,
    height: (width * 0.312) / 1.1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  item_Box_icon: { width: 60, height: 80, marginLeft: 15 },
  item_Box_Text: { width: '58%', height: 60 },
  item_Box_Touch: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3
  },
  item_Box_down: { width: width / 20, height: (width * 0.97) / 20, marginRight: 15 },
  items: {
    width: width / 1.5,
    height: (width * 0.52) / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    marginRight: 15
  },
  items_img: { width: width / 1.6, height: (width * 0.51) / 1.6 }
}));

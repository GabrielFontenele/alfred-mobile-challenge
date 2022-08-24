import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  name: {
    fontSize: 20,
    paddingBottom: 5,
  },
  text: {
    fontSize: 16,
    paddingVertical: 5,
  },
  textContainer: {
    color: Colors.light.blue700,
    marginLeft: 16,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 999,
    backgroundColor: '#a6a6a6',
    marginHorizontal: 16,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

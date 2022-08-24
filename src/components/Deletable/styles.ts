import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

export const styles = StyleSheet.create({
  delete: {
    backgroundColor: Colors.light.blue700,
    color: Colors.light.blue200,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    flex: 1,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
})

import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
    backgroundColor: '#f6f6f6',
  },
  searchBar: {
    display: 'flex',
    height: 44,
    width: '90%',
    marginBottom: 3,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
  },
  input: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    borderColor: Colors.light.blue700,
    borderRadius: 4,
    borderWidth: 1,
  },
})

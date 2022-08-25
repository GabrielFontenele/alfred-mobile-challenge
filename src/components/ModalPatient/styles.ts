import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    // justifyContent: 'sta',
    alignItems: 'center',
    marginTop: '60%',
    backgroundColor: 'white',
    paddingTop: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 100,
  },
  image: {
    marginTop: -100,
    width: 120,
    height: 120,
    borderRadius: 999,
    backgroundColor: '#a6a6a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  patientContent: {
    marginTop: 20,
    width: '85%',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 22,
    paddingBottom: 4,
  },
  favoritar: {
    width: '80%',
    paddingVertical: 20,
    marginBottom: '10%',
    borderRadius: 4,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 4,
  },
  textFavoritar: {
    color: '#f6f6f6',
    fontSize: 18,
  },
})

/* eslint-disable jsx-a11y/alt-text */
import { useContext } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { PatientsContext } from '../../contexts/PatientsContext'
import { Patient } from '../../reducers/patients/reducer'

import ModalPatient from '../ModalPatient'
import { styles } from './styles'

type Props = {
  patient: Patient
}

export default function CardPatient({ patient }: Props) {
  const { setShowPatient } = useContext(PatientsContext)
  const {
    id,
    name: { first, last, title },
    email,
    phone,
  } = patient

  function handlerPatientPress() {
    setShowPatient(id)
  }
  return (
    <>
      <TouchableOpacity onPress={handlerPatientPress}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../assets/user.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{`${title} ${first} ${last}`}</Text>
            <Text style={styles.text}>{email}</Text>
            <Text style={styles.text}>{phone}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}

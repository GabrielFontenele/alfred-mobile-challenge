/* eslint-disable jsx-a11y/alt-text */
import { Image, Text, View } from 'react-native'
import { Patient } from '../ListPatient'
import { styles } from './styles'

type Props = {
  patient: Patient
}

export default function CardPatient({ patient }: Props) {
  const {
    name: { first, last, title },
    email,
    phone,
  } = patient

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/user.png')} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{`${title} ${first} ${last}`}</Text>
        <Text style={styles.text}>{email}</Text>
        <Text style={styles.text}>{phone}</Text>
      </View>
    </View>
  )
}

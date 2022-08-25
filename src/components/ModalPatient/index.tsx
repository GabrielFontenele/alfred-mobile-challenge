/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from 'react'
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'
import { PatientsContext } from '../../contexts/PatientsContext'
import { styles } from './styles'

export default function ModalPatient() {
  const [modalVisible, setModalVisible] = useState(false)
  const { showPatient, setShowPatient } = useContext(PatientsContext)

  let patientView = <></>
  if (showPatient) {
    const {
      name: { first, last },
      email,
      gender,
      birthday,
      phone,
      nationality,
      address,
      id,
    } = showPatient
    patientView = (
      <>
        <View style={styles.patientContent}>
          <Text style={styles.text}>{`${first} ${last}`}</Text>
          <Text style={styles.text}>{email}</Text>
          <Text style={styles.text}>{gender}</Text>
          <Text style={styles.text}>{birthday}</Text>
          <Text style={styles.text}>{phone}</Text>
          <Text style={styles.text}>{nationality}</Text>
          <Text style={styles.text}>{address}</Text>
          <Text style={styles.text}>{id}</Text>
        </View>
        <TouchableOpacity style={styles.favoritar}>
          <Text style={styles.textFavoritar}>Favoritar</Text>
        </TouchableOpacity>
      </>
    )
  }

  useEffect(() => {
    if (showPatient) {
      setModalVisible(true)
    } else {
      setModalVisible(false)
    }
  }, [showPatient])

  function handlerSwipeDown() {
    setShowPatient('-1')
  }

  return (
    <View>
      <GestureRecognizer style={{ flex: 1 }} onSwipeDown={handlerSwipeDown}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.')
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.modalView}>
            <Image
              style={styles.image}
              source={require('../../assets/user.png')}
            />
            {patientView}
          </View>
        </Modal>
      </GestureRecognizer>
    </View>
  )
}

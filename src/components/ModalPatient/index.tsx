/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from 'react'
import { Modal, Text, View, Image, TouchableOpacity } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'
import { PatientsContext } from '../../contexts/PatientsContext'
import { styles } from './styles'

export default function ModalPatient() {
  const [modalVisible, setModalVisible] = useState(false)
  const { showPatient, setShowPatient, addFavorite } =
    useContext(PatientsContext)

  function handleAddFavorite() {
    if (showPatient) {
      addFavorite(showPatient)
    }
  }

  let patientView = <></>
  if (showPatient) {
    const {
      name: { first, last },
      email,
      gender,
      dob,
      phone,
      id,
      nat,
      location: { city, state, street },
      picture: { large },
    } = showPatient
    patientView = (
      <>
        <Image style={styles.image} source={{ uri: large }} />
        <View style={styles.patientContent}>
          <Text style={styles.text}>{`${first} ${last}`}</Text>
          <Text style={styles.text}>{email}</Text>
          <Text style={styles.text}>
            {gender === 'male' ? 'masculino' : 'feminino'}
          </Text>
          <Text style={styles.text}>
            {new Date(dob.date).toLocaleDateString('pt-BR')}
          </Text>
          <Text style={styles.text}>{phone}</Text>
          <Text style={styles.text}>{nat}</Text>
          <Text style={styles.text}>{`${city} ${state} `}</Text>
          <Text style={styles.text}>{street.name}</Text>
          <Text style={styles.text}>{id.value}</Text>
        </View>
        <TouchableOpacity style={styles.favoritar} onPress={handleAddFavorite}>
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
          <View style={styles.modalView}>{patientView}</View>
        </Modal>
      </GestureRecognizer>
    </View>
  )
}

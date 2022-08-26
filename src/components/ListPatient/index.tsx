import { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { styles } from './styles'

import { Text, View } from '../Themed'
import CardPatient from '../CardPatient'
import { PatientsContext } from '../../contexts/PatientsContext'
import { Patient } from '../../reducers/patients/reducer'

interface ListPatientProps {
  query?: string
  order: boolean
}

export default function ListPatient({ query = '', order }: ListPatientProps) {
  const { patients, fetchPatients } = useContext(PatientsContext)
  const initialNumToRender = 50

  function handleEndReached() {
    fetchPatients(false)
  }

  function handleRefresh() {
    fetchPatients(true)
  }

  let showPatient: Patient[] = []

  if (query) {
    showPatient = patients.filter(
      (patient) =>
        patient.name.first.toLowerCase().includes(query.toLowerCase()) ||
        patient.name.last.toLowerCase().includes(query.toLowerCase()),
    )
  } else {
    showPatient = patients
  }

  if (order) {
    showPatient = showPatient
      .slice()
      .sort((a, b) => (a.name.first > b.name.first ? 1 : -1))
  }

  // if (showPatient.length < initialNumToRender && !loading) {
  //   fetchPatients(false)
  // }

  return (
    <View style={styles.container}>
      <FlatList
        data={showPatient}
        extraData={showPatient}
        indicatorStyle="black"
        initialNumToRender={initialNumToRender}
        keyExtractor={(item) => {
          return item.id.value
        }}
        renderItem={({ item }) => <CardPatient patient={item} />}
        refreshing={false}
        onRefresh={handleRefresh}
        ListFooterComponent={() =>
          !query ? (
            <ActivityIndicator
              size="large"
              color="#3d5a80"
              style={{ paddingBottom: 15 }}
            />
          ) : (
            <></>
          )
        }
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
      />
    </View>
  )
}

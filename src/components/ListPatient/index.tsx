import { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { styles } from './styles'

import { Text, View } from '../Themed'
import CardPatient from '../CardPatient'
import { PatientsContext } from '../../contexts/PatientsContext'

export default function ListPatient() {
  const { patients, fetchPatients } = useContext(PatientsContext)

  function handleEndReached() {
    fetchPatients(false)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={patients}
        keyExtractor={(item) => {
          return item.id.value
        }}
        renderItem={({ item }) => <CardPatient patient={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text>Lista vazia</Text>}
        ListFooterComponent={() => (
          <ActivityIndicator
            size="large"
            color="#3d5a80"
            style={{ paddingBottom: 15 }}
          />
        )}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
      />
    </View>
  )
}

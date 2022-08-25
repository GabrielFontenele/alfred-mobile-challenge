import { useContext, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { styles } from './styles'

import { Text, View } from '../Themed'
import CardPatient from '../CardPatient'
import { PatientsContext } from '../../contexts/PatientsContext'

export default function ListPatient() {
  const { patients } = useContext(PatientsContext)

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
      />
    </View>
  )
}

import { useContext, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { styles } from './styles'

import { Text, View } from '../Themed'
import Deletable from '../Deletable'
import CardPatient from '../CardPatient'
import { Patient } from '../../reducers/patients/reducer'
import { PatientsContext } from '../../contexts/PatientsContext'

type Props = {
  deletable?: boolean
  onDelete?: (index: number) => void
}

export default function ListPatient({ deletable = false }: Props) {
  const { patients } = useContext(PatientsContext)

  const renderItem = deletable
    ? ({ item }: { item: Patient }) => <Deletable patient={item} />
    : ({ item }: { item: Patient }) => <CardPatient patient={item} />

  return (
    <View style={styles.container}>
      <FlatList
        data={patients}
        keyExtractor={(item) => {
          return item.id.value
        }}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text>Lista vazia</Text>}
      />
    </View>
  )
}

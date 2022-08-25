import { useContext, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { styles } from './styles'

import { Text, View } from '../Themed'
import Deletable from '../Deletable'
import { PatientsContext } from '../../contexts/PatientsContext'

export default function ListFavoritesPatient() {
  const { favorites } = useContext(PatientsContext)

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => {
          return item.id.value
        }}
        renderItem={({ item }) => <Deletable patient={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text>Lista vazia</Text>}
      />
    </View>
  )
}

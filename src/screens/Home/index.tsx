import { TextInput, TextInputSubmitEditingEventData } from 'react-native'

import ListPatient from '../../components/ListPatient'
import { RootTabScreenProps } from '../../../types'
import { View } from '../../components/Themed'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from 'react'

export default function Home({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [query, setQuery] = useState('')
  const [order, setOrder] = useState(false)
  const [searchBarValue, setSearchBarValue] = useState('')

  function handleSearchSubmit() {
    setQuery(searchBarValue)
  }

  function handleOrder() {
    setOrder((state) => !state)
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="filtrar nome"
            onChangeText={setSearchBarValue}
            onSubmitEditing={handleSearchSubmit}
          />

          <Ionicons name="search" size={22} onPress={handleSearchSubmit} />
        </View>

        <Ionicons
          name={order ? 'filter-sharp' : 'filter-outline'}
          size={32}
          style={{ paddingLeft: 16 }}
          onPress={handleOrder}
        />
      </View>
      <ListPatient query={query} order={order} />
    </View>
  )
}

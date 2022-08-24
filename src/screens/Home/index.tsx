import { TextInput } from 'react-native'

import ListPatient from '../../components/ListPatient'
import { RootTabScreenProps } from '../../../types'
import { View } from '../../components/Themed'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Home({ navigation }: RootTabScreenProps<'TabOne'>) {
  // const [searchText, setSearchText] = useState('')

  // function handleSearch() {}

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Gabriel Fontenele" />

          <Ionicons name="search" size={22} />
          {/* <Heart color="#AE2983" weight="fill" size={32} />
          <Cube color="teal" weight="duotone" /> */}
        </View>

        <Ionicons name="filter-outline" size={32} style={{ paddingLeft: 16 }} />
      </View>
      <ListPatient path="/screens/Home.tsx" />
    </View>
  )
}

import ListFavoritesPatient from '../../components/ListFavoritesPatient'
import { View } from '../../components/Themed'
import { styles } from './styles'

export default function Favorites() {
  return (
    <View style={styles.container}>
      <ListFavoritesPatient />
    </View>
  )
}

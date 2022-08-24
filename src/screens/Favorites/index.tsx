import ListPatient from '../../components/ListPatient'
import { View } from '../../components/Themed'
import { styles } from './styles'

export default function Favorites() {
  return (
    <View style={styles.container}>
      <ListPatient deletable={true} />
    </View>
  )
}

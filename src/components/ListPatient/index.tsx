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
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text>Lista vazia</Text>}
      />
    </View>
  )
}

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet',
//   )
// }

// const styles = StyleSheet.create({
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightContainer: {
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   helpContainer: {
//     marginTop: 15,
//     marginHorizontal: 20,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     textAlign: 'center',
//   },
// })

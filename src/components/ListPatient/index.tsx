import { useState } from 'react'
import { FlatList } from 'react-native'
import { styles } from './styles'

import { Text, View } from '../Themed'
import Deletable from '../Deletable'
import CardPatient from '../CardPatient'

export interface Patient {
  id: string
  name: {
    title: string
    first: string
    last: string
  }
  email: string
  image: string
  gender: string
  birthday: string
  phone: string
  nationality: string
  address: string
}

type Props = {
  deletable?: boolean
  onDelete?: (index: number) => void
}

export default function ListPatient({ deletable = false }: Props) {
  const [participants] = useState<Patient[]>([
    {
      id: '1',
      name: {
        title: 'title1',
        first: 'first1',
        last: 'last1',
      },
      email: 'email1',
      image: 'image1',
      gender: 'gender1',
      birthday: 'birthday1',
      phone: 'phone1',
      nationality: 'nationality1',
      address: 'address1',
    },
    {
      id: '2',
      name: {
        title: 'title2',
        first: 'first2',
        last: 'last2',
      },
      email: 'email2',
      image: 'image2',
      gender: 'gender2',
      birthday: 'birthday2',
      phone: 'phone2',
      nationality: 'nationality2',
      address: 'address2',
    },
    {
      id: '3',
      name: {
        title: 'title2',
        first: 'first2',
        last: 'last2',
      },
      email: 'email2',
      image: 'image2',
      gender: 'gender2',
      birthday: 'birthday2',
      phone: 'phone2',
      nationality: 'nationality2',
      address: 'address2',
    },
    {
      id: '4',
      name: {
        title: 'title2',
        first: 'first2',
        last: 'last2',
      },
      email: 'email2',
      image: 'image2',
      gender: 'gender2',
      birthday: 'birthday2',
      phone: 'phone2',
      nationality: 'nationality2',
      address: 'address2',
    },
    {
      id: '5',
      name: {
        title: 'title2',
        first: 'first2',
        last: 'last2',
      },
      email: 'email2',
      image: 'image2',
      gender: 'gender2',
      birthday: 'birthday2',
      phone: 'phone2',
      nationality: 'nationality2',
      address: 'address2',
    },
    {
      id: '6',
      name: {
        title: 'title2',
        first: 'first2',
        last: 'last2',
      },
      email: 'email2',
      image: 'image2',
      gender: 'gender2',
      birthday: 'birthday2',
      phone: 'phone2',
      nationality: 'nationality2',
      address: 'address2',
    },
  ])

  const renderItem = deletable
    ? ({ item }: { item: Patient }) => <Deletable patient={item} />
    : ({ item }: { item: Patient }) => <CardPatient patient={item} />

  return (
    <View style={styles.container}>
      <FlatList
        data={participants}
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

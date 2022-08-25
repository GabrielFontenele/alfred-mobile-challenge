/* eslint-disable react-hooks/exhaustive-deps */
import { StatusBar } from 'expo-status-bar'
import ModalPatient from './components/ModalPatient'
import Navigation from './navigation'
import useColorScheme from './hooks/useColorScheme'
import { useContext, useEffect } from 'react'
import { PatientsContext } from './contexts/PatientsContext'
import { Patient } from './reducers/patients/reducer'

export default function Content() {
  const colorScheme = useColorScheme()
  const { setPatients } = useContext(PatientsContext)

  useEffect(() => {
    const participants: Patient[] = [
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
    ]
    setPatients(participants)
  }, [])

  return (
    <>
      <Navigation colorScheme={colorScheme} />
      <StatusBar style="light" />
      <ModalPatient />
    </>
  )
}

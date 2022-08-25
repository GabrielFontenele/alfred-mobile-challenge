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
  const { fetchPatients } = useContext(PatientsContext)

  useEffect(() => {
    fetchPatients(true)
  }, [])

  return (
    <>
      <Navigation colorScheme={colorScheme} />
      <StatusBar style="light" />
      <ModalPatient />
    </>
  )
}

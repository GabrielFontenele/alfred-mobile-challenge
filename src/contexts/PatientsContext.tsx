import { createContext, ReactNode, useReducer } from 'react'
import { api } from '../libs/api'
import {
  setPatientsAction,
  showPatientAction,
} from '../reducers/patients/actions'
import { Patient, patientsReducer } from '../reducers/patients/reducer'

interface PatientsContextType {
  patients: Patient[]
  showPatient: Patient | null
  page: number
  setShowPatient: (id: string) => void
  fetchPatients: (refresh: boolean) => void
}

export const PatientsContext = createContext({} as PatientsContextType)

interface PatientsContextProviderProps {
  children: ReactNode
}

export function PatientsContextProvider({
  children,
}: PatientsContextProviderProps) {
  const [patientsState, dispatch] = useReducer(patientsReducer, {
    patients: [],
    page: 1,
    showPatient: null,
  })
  const { patients, showPatient, page } = patientsState

  function setShowPatient(id: string) {
    dispatch(showPatientAction(id))
  }

  function fetchPatients(refresh: boolean) {
    api.get(`page=${page}`).then((response) => {
      dispatch(setPatientsAction(response.data.results, refresh))
    })
  }

  return (
    <PatientsContext.Provider
      value={{
        patients,
        showPatient,
        page,
        setShowPatient,
        fetchPatients,
      }}
    >
      {children}
    </PatientsContext.Provider>
  )
}

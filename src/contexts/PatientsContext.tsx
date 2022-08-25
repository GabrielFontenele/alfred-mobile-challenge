import { createContext, ReactNode, useReducer } from 'react'
import { api } from '../libs/api'
import {
  addFavoriteAction,
  removeFavoriteAction,
  setPatientsAction,
  showPatientAction,
} from '../reducers/patients/actions'
import { Patient, patientsReducer } from '../reducers/patients/reducer'

interface PatientsContextType {
  patients: Patient[]
  favorites: Patient[]
  showPatient: Patient | null
  page: number
  setShowPatient: (id: string) => void
  fetchPatients: (refresh: boolean) => void
  addFavorite: (patient: Patient) => void
  removeFavorite: (id: string) => void
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
    favorites: [],
    page: 1,
    showPatient: null,
  })
  const { patients, favorites, showPatient, page } = patientsState

  function setShowPatient(id: string) {
    dispatch(showPatientAction(id))
  }

  function fetchPatients(refresh: boolean) {
    api.get(`page=${page}`).then((response) => {
      dispatch(setPatientsAction(response.data.results, refresh))
    })
  }
  function addFavorite(patient: Patient) {
    dispatch(addFavoriteAction(patient))
  }

  function removeFavorite(id: string) {
    dispatch(removeFavoriteAction(id))
  }

  return (
    <PatientsContext.Provider
      value={{
        patients,
        favorites,
        showPatient,
        page,
        setShowPatient,
        fetchPatients,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </PatientsContext.Provider>
  )
}

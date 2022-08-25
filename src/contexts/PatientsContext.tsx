import { createContext, ReactNode, useReducer } from 'react'
import {
  setPatientsAction,
  showPatientAction,
} from '../reducers/patients/actions'
import { Patient, patientsReducer } from '../reducers/patients/reducer'

interface PatientsContextType {
  patients: Patient[]
  showPatient: Patient | null
  setPatients: (patients: Patient[]) => void
  setShowPatient: (id: string) => void
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
    showPatient: null,
  })
  const { patients, showPatient } = patientsState

  function setPatients(patients: Patient[]) {
    dispatch(setPatientsAction(patients))
  }

  function setShowPatient(id: string) {
    dispatch(showPatientAction(id))
  }

  return (
    <PatientsContext.Provider
      value={{
        patients,
        showPatient,
        setPatients,
        setShowPatient,
      }}
    >
      {children}
    </PatientsContext.Provider>
  )
}

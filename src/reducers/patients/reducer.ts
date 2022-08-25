import { produce } from 'immer'
import { ActionTypes } from './actions'

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

interface PatientsState {
  patients: Patient[]
  showPatient: Patient | null
}

export function patientsReducer(state: PatientsState, action: any) {
  switch (action.type) {
    case ActionTypes.SET_PATIENTS:
      return produce(state, (draft) => {
        draft.patients = action.payload.patients
      })
    case ActionTypes.SHOW_PATIENT: {
      const currentPatientIndex = state.patients.findIndex((patient) => {
        return patient.id === action.payload.id
      })

      return produce(state, (draft) => {
        if (currentPatientIndex < 0) {
          draft.showPatient = null
        } else {
          draft.showPatient = draft.patients[currentPatientIndex]
        }
      })
    }
    default:
      return state
  }
}

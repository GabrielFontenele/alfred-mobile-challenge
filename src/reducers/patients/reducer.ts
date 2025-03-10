import { produce } from 'immer'
import { ActionTypes } from './actions'

interface Name {
  title: string
  first: string
  last: string
}

interface Street {
  number: number
  name: string
}

interface Coordinates {
  latitude: string
  longitude: string
}

interface Timezone {
  offset: string
  description: string
}

interface Location {
  street: Street
  city: string
  state: string
  country: string
  postcode: number
  coordinates: Coordinates
  timezone: Timezone
}

interface Dob {
  date: Date
  age: number
}

interface Id {
  name: string
  value: string
}

interface Picture {
  large: string
  medium: string
  thumbnail: string
}

export interface Patient {
  gender: string
  name: Name
  location: Location
  email: string
  dob: Dob
  phone: string
  id: Id
  picture: Picture
  nat: string
}

interface PatientsState {
  patients: Patient[]
  favorites: Patient[]
  showPatient: Patient | null
  page: number
}

export function patientsReducer(state: PatientsState, action: any) {
  switch (action.type) {
    case ActionTypes.SET_PATIENTS:
      return produce(state, (draft) => {
        if (action.payload.refresh) {
          draft.patients = action.payload.patients
        } else {
          draft.patients.push(...action.payload.patients)
        }
        draft.page = action.payload.refresh ? 1 : draft.page + 1
      })
    case ActionTypes.SHOW_PATIENT: {
      const currentPatientIndex = state.patients.findIndex((patient) => {
        return patient.id.value === action.payload.id
      })

      return produce(state, (draft) => {
        if (currentPatientIndex < 0) {
          draft.showPatient = null
        } else {
          draft.showPatient = draft.patients[currentPatientIndex]
        }
      })
    }
    case ActionTypes.ADD_FAVORITE:
      return produce(state, (draft) => {
        const currentFavoriteIndex = state.favorites.findIndex((patient) => {
          return patient.id.value === action.payload.patient.id.value
        })
        if (currentFavoriteIndex < 0) {
          draft.favorites.push(action.payload.patient)
        }
      })
    case ActionTypes.REMOVE_FAVORITE: {
      const currentFavoriteIndex = state.favorites.findIndex((patient) => {
        return patient.id.value === action.payload.id
      })

      return produce(state, (draft) => {
        if (currentFavoriteIndex >= 0) {
          draft.favorites.splice(currentFavoriteIndex, 1)
        }
      })
    }
    default:
      return state
  }
}

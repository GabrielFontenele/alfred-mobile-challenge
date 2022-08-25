import { Patient } from './reducer'

export enum ActionTypes {
  SET_PATIENTS = 'SET_PATIENTS',
  SHOW_PATIENT = 'SHOW_PATIENT',
  ADD_FAVORITE = 'ADD_FAVORITE',
  REMOVE_FAVORITE = 'REMOVE_FAVORITE',
}

export function setPatientsAction(patients: Patient[], refresh: boolean) {
  return {
    type: ActionTypes.SET_PATIENTS,
    payload: {
      patients,
      refresh,
    },
  }
}

export function showPatientAction(id: string) {
  return {
    type: ActionTypes.SHOW_PATIENT,
    payload: {
      id,
    },
  }
}

export function addFavoriteAction(patient: Patient) {
  return {
    type: ActionTypes.ADD_FAVORITE,
    payload: {
      patient,
    },
  }
}

export function removeFavoriteAction(id: string) {
  return {
    type: ActionTypes.REMOVE_FAVORITE,
    payload: {
      id,
    },
  }
}

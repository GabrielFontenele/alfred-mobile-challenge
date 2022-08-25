import { Patient } from './reducer'

export enum ActionTypes {
  SET_PATIENTS = 'SET_PATIENTS',
  SHOW_PATIENT = 'SHOW_PATIENT',
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

import { Patient } from './reducer'

export enum ActionTypes {
  SET_PATIENTS = 'SET_PATIENTS',
  SHOW_PATIENT = 'SHOW_PATIENT',
}

export function setPatientsAction(patients: Patient[]) {
  return {
    type: ActionTypes.SET_PATIENTS,
    payload: {
      patients,
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
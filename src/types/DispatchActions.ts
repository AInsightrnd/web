import { User } from "./User"

export enum ActionType {
  SET_USER = "SET_USER"
}

export type SetUser = {
  type: ActionType.SET_USER
  payload: User
}
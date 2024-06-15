import { Context } from "../types/Context"
import { SetUser } from "../types/DispatchActions"

export const Reducer = (
  state: Context,
  action: SetUser
): Context => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}
import { Context } from "../types/Context"
import { ActionType, SetUser } from "../types/DispatchActions"

export const Reducer = (
  state: Context,
  action: SetUser
): Context => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload
      }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
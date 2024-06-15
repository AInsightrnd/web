import { createContext } from "react";
import { Context } from "../types/Context";
import { SetUser } from "../types/DispatchActions";

export const initialContext: Context = {
  user: {
    id: "",
    email: "",
    firstname: "",
    lastname: ""
  },
}

export const GlobalContext = createContext<{
  state: Context
  dispatch: React.Dispatch<SetUser>
}>({
  state: initialContext,
  dispatch: () => null
});
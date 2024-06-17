import { createContext } from 'react';
import { Context } from '../types/Context';
import { SetUser } from '../types/DispatchActions';

export const initialContext: Context = {
  user: {
    id: "",
    email: "",
    firstname: "",
    lastname: "",
    signedin: false,
    token: "",
  },
}

export const GlobalContext = createContext<{
  state: Context
  dispatch: React.Dispatch<SetUser>
}>({
  state: initialContext,
  dispatch: () => null
});

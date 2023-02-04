import * as React from 'react';
import { TicketState } from '@acme/shared-models';
import { TicketAction, ticketReducer } from './ticket-reducer';
//
// Following Dodds pattern:
// https://kentcdodds.com/blog/application-state-management-with-react
//
export type TicketDispatch = (action: TicketAction) => void;

export const initialState : TicketState = {
  tickets: [],
  users: []
};


const TicketStateContext = React.createContext<TicketState>(initialState);
const TicketDispatchContext = React.createContext<TicketDispatch | undefined>(undefined);

type TicketProviderProps = {
  children: React.ReactNode
}


export const TicketProvider = ({ children }: TicketProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(ticketReducer, initialState);
  return (
    <TicketStateContext.Provider value={state}>
      <TicketDispatchContext.Provider value={dispatch}>{children}</TicketDispatchContext.Provider>
    </TicketStateContext.Provider>
  );
};

export const useTicketState = () => {
  const context = React.useContext(TicketStateContext);
  if (!context) {
    throw new Error('useTicketState must be used within a TicketProvider');
  }
  return context;
};

export const useTicketDispatch = () => {
  const context = React.useContext(TicketDispatchContext);
  if (!context) {
    throw new Error('useTicketDispatch must be used within a TicketProvider');
  }
  return context;
};

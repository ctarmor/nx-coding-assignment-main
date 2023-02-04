import * as React from 'react';
import { ticketReducer } from './ticketReducer';
//
// Following Dodds pattern:
// https://kentcdodds.com/blog/application-state-management-with-react
//

const TicketStateContext = React.createContext();
const TicketDispatchContext = React.createContext();

export const initialState = {};

export const TicketProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(ticketReducer, initialState);
  return (
    <TicketStateContext.Provider value={state}>
      <TicketDispatchContext value={dispatch}>{children}</TicketDispatchContext>
    </TicketStateContext.Provider>
  );
};

export const useTicketState = () => {
  const context = React.useContext(TicketStateContext);
  if (!context) {
    throw new Error(`useCount must be used within a TicketProvider`);
  }
  return context;
};

export const useTicketDispatch = () => {
  const context = React.useContext(TicketDispatchContext);
  if (!context) {
    throw new Error(`useCount must be used within a TicketProvider`);
  }
  return context;
};

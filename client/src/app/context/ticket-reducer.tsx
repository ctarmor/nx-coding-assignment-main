import { User, Ticket, TicketState } from '@acme/shared-models';
//
// ticket reducers
//
//
// Following Dodds pattern:
// https://kentcdodds.com/blog/application-state-management-with-react
//

type SetUsers = { type: 'SET_USERS'; users: User[] };
type SetTickets = { type: 'SET_TICKETS'; tickets: Ticket[] };
type SetTicket = { type: 'SET_TICKET'; selectedTicket: Ticket };
export type TicketAction = SetUsers | SetTickets | SetTicket;

export const ticketReducer = (curState: TicketState, action: TicketAction) => {
  // console.log('>>> ticketReducer:', action.type, action);
  switch (action.type) {
    case 'SET_TICKETS':
      return {
        ...curState,
        tickets: action.tickets,
      };
    case 'SET_TICKET':
      return {
        ...curState,
        selectedTicket: action.selectedTicket,
      };
    case 'SET_USERS':
      return {
        ...curState,
        users: action.users,
      };
    default:
      throw new Error(`Invalid actionn type`);
  }
};

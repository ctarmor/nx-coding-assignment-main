import { TicketDispatch } from '../context/tickets-context';
//
// Centralized api calls
//

export const fetchTickets = async (ticketDispatcher: TicketDispatch) => {
  const data = await fetch('/api/tickets').then();
  ticketDispatcher({ type: 'SET_TICKETS', tickets: await data.json() });
};

export const fetchUsers = async (ticketDispatcher: TicketDispatch) => {
  const data = await fetch('/api/users').then();
  ticketDispatcher({ type: 'SET_USERS', users: await data.json() });
};

export const fetchTicket = async (id: string, ticketDispatcher: TicketDispatch) => {
  const data = await fetch(`/api/tickets/${id}`).then();
  ticketDispatcher({ type: 'SET_TICKET', selectedTicket: await data.json() });
};

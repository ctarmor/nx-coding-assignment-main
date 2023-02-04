import { Ticket, User } from '@acme/shared-models';
import { render } from '@testing-library/react';
import { TicketAction, ticketReducer } from './ticket-reducer';
import { initialState } from './tickets-context';

describe('ticketReducer', () => {
  const mockTicket : Ticket = {
    id: 1,
    description: 'd',
    assigneeId: 2,
    completed: true
  }

  const mockUser : User = {
    id: 1,
    name: 'n'
  }

  it.each([
    [{ type: 'SET_TICKETS', tickets: [mockTicket] }, { tickets: [mockTicket] }, ],
    [{ type: 'SET_TICKET', selectedTicket: mockTicket }, { selectedTicket: mockTicket }, ],
    [{ type: 'SET_USERS', users: [mockUser] }, { users: [mockUser] }, ]
  ])
  ('should update SET_TICKETS', (action, expected) => {
    const target = ticketReducer(initialState, action as TicketAction);
    expect(target).toEqual({ ...initialState, ...expected });
  });

});

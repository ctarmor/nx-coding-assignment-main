import { Ticket } from '@acme/shared-models';
import { queryByText, render } from '@testing-library/react';
import { TicketProvider, useTicketState } from '../context/tickets-context';
import Tickets from './tickets';

jest.mock('../context/tickets-context', () => {
  return {
    ...(jest.requireActual('../context/tickets-context') as any),
    useTicketState: jest.fn(),
  };
});

describe('Tickets', () => {
  const mockUseTicketState = useTicketState as jest.Mock;
  const mockTicket : Ticket = {
    id: 1,
    description: 'd',
    assigneeId: 2,
    completed: true
  }
  
  it('should render with tickets', () => {
    mockUseTicketState.mockReturnValue({
      tickets: [mockTicket]
    });

    const { queryByText } = render(
      <TicketProvider>
        <Tickets />
      </TicketProvider>
    );

    expect(queryByText('Ticket: 1, d')).toBeInTheDocument();
  });
});

import { render } from '@testing-library/react';
import { TicketProvider } from '../context/tickets-context';

import Tickets from './tickets';

describe('Tickets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketProvider><Tickets /></TicketProvider>);
    expect(baseElement).toBeTruthy();
  });
});

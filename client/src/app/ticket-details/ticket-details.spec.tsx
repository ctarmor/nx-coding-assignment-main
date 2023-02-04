import { render } from '@testing-library/react';
import { TicketProvider } from '../context/tickets-context';

import TicketDetails from './ticket-details';




describe('TicketDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketProvider><TicketDetails /></TicketProvider>);
    expect(baseElement).toBeTruthy();
  });
});

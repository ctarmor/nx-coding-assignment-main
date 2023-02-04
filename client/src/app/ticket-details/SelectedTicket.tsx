import { Ticket } from '@acme/shared-models';

interface SelectedTicketProps {
  ticket: Ticket;
}

export const SelectedTicket = ({ ticket }: SelectedTicketProps) => {
  return (
    <div>
      <h3>{ticket.description}</h3>
      <div>Ticket is {ticket.completed ? 'COMPLETED' : 'INCOMPLETE'}</div>
    </div>
  );
};

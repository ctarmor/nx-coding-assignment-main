import styles from './ticket-details.module.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTicket } from '../api/apis';
import { useTicketDispatch, useTicketState } from '../context/tickets-context';
import { Ticket } from '@acme/shared-models';

/* eslint-disable-next-line */
export interface TicketDetailsProps {}

const TicketDetails = (props: TicketDetailsProps) => {
  const ticketDispatcher = useTicketDispatch();
  const { selectedTicket } = useTicketState();
  const { id } = useParams();

  useEffect(() => {
    fetchTicket(id || '', ticketDispatcher);
  }, [id, ticketDispatcher]);

  return (
    <div className={styles['container']}>
      <h1>Ticket:</h1>
      {!selectedTicket && <span>Loading ticket ...</span>}
      {selectedTicket && <SelectedTicket ticket={selectedTicket} />}
      {selectedTicket && !selectedTicket.completed && (
        <UserSelector ticket={selectedTicket} />
      )}
      <div></div>
    </div>
  );
};

interface SelectedTicketProps {
  ticket: Ticket;
}

const SelectedTicket = ({ ticket }: SelectedTicketProps) => {
  return (
    <div>
      <h3>{ticket.description}</h3>
      <div>Ticket is {ticket.completed ? 'COMPLETED' : 'INCOMPLETE'}</div>
    </div>
  );
};

interface UserSelector {
  ticket: Ticket;
}

const UserSelector = ({ ticket }: UserSelector) => {
  return (
    <div>
      <h3>Assign Ticket to:</h3>
      
    </div>
  );
};

export default TicketDetails;

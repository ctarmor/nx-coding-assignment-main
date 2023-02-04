import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTicket } from '../api/apis';
import { useTicketDispatch, useTicketState } from '../context/tickets-context';
import styles from './ticket-details.module.css';

/* eslint-disable-next-line */
export interface TicketDetailsProps {}

export const TicketDetails = (props: TicketDetailsProps) => {
  const ticketDispatcher = useTicketDispatch();
  const { selectedTicket } = useTicketState();
  const { id } = useParams();

  useEffect(() => {
    fetchTicket(id || '', ticketDispatcher);
  }, [id, ticketDispatcher]);

  return (
    <div className={styles['container']}>
      <h1>Welcome to TicketDetails!</h1>
      {!selectedTicket && <span>Loading ticket ...</span>}
      {selectedTicket && (
        <div>
          <h3>{selectedTicket.description}</h3>
          <div>
            Ticket is {selectedTicket.completed ? 'COMPLETED' : 'INCOMPLETE'}
          </div>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default TicketDetails;

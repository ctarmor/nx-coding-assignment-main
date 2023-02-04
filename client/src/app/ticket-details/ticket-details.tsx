import styles from './ticket-details.module.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTicket } from '../api/apis';
import { useTicketDispatch, useTicketState } from '../context/tickets-context';
import { SelectedTicket } from './SelectedTicket';
import { UserSelector } from './UserSelector';

const TicketDetails = () => {
  const ticketDispatcher = useTicketDispatch();
  const { selectedTicket, users } = useTicketState();
  const { id } = useParams();

  useEffect(() => {
    fetchTicket(id || '', ticketDispatcher);
  }, [id, ticketDispatcher]);

  // Easier to read thank in JSX below
  // const displayUserSelector = selectedTicket && !selectedTicket.assigneeId;

  return (
    <div className={styles['container']}>
      <h1>Ticket:</h1>
      {!selectedTicket && <span>Loading ticket ...</span>}
      {selectedTicket && <SelectedTicket ticket={selectedTicket} />}
      {selectedTicket?.assigneeId && <div><br/>Assigned to {users.find(u => u.id === selectedTicket.assigneeId)?.name}</div>}
      {selectedTicket &&  <UserSelector ticket={selectedTicket} />}
      <div></div>
    </div>
  );
};

export default TicketDetails;

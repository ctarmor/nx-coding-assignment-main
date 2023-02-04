import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import TicketDetails from './ticket-details/ticket-details';
import { fetchTickets, fetchUsers } from './api/apis';
import { useTicketDispatch } from './context/tickets-context';
import { Tickets } from './tickets/tickets';

export const AppHome = () => {
  const ticketDispatcher = useTicketDispatch();

  // Very basic way to synchronize state with server.
  // Feel free to use any state/fetch library you want (e.g. react-query, xstate, redux, etc.).
  useEffect(() => {
    fetchTickets(ticketDispatcher);
    fetchUsers(ticketDispatcher);
  }, [ticketDispatcher]);

  return (
    <div className={styles['app']}>
      <h1>Ticketing App</h1>
      <Routes>
        <Route path="/" element={<Tickets />} />
        {/* Hint: Try `npx nx g component TicketDetails --project=client --no-export` to generate this component  */}
        <Route path="/:id" element={<TicketDetails />} />
      </Routes>
    </div>
  );
};


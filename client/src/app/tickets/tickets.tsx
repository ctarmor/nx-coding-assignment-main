import { useTicketState } from '../context/tickets-context';
import styles from './tickets.module.css';

const Tickets = () => {
  const { tickets } = useTicketState();

  return (
    <div className={styles['tickets']}>
      <h2>Tickets</h2>
      {tickets && tickets.length > 0 ? (
        <ul>
          {tickets.map((t) => (
            <li key={t.id}>
              <a href={`/${t.id}`}>{`Ticket: ${t.id}, ${t.description}`}</a>
            </li>
          ))}
        </ul>
      ) : (
        <span>Loading tickets ...</span>
      )}
    </div>
  );
};

export default Tickets;
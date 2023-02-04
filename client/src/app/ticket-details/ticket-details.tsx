import { useParams } from 'react-router-dom';
import styles from './ticket-details.module.css';

/* eslint-disable-next-line */
export interface TicketDetailsProps {}

export const TicketDetails = (props: TicketDetailsProps) => {
  const { id } = useParams();

  
  return (
    <div className={styles['container']}>
      <h1>Welcome to TicketDetails!</h1>
      <div>ID: {id}</div>

    </div>
  );
}

export default TicketDetails;

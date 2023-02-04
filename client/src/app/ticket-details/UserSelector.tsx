/* eslint-disable jsx-a11y/anchor-is-valid */
import { Ticket, User } from '@acme/shared-models';
import { useTicketDispatch, useTicketState } from '../context/tickets-context';

interface UserSelectorProps {
  ticket: Ticket;
}

export const UserSelector = ({ ticket }: UserSelectorProps) => {
  const ticketDispatcher = useTicketDispatch();
  const { users } = useTicketState();

  const onClick = (e: { preventDefault: () => void }, user: User): void => {
    e.preventDefault();
    ticketDispatcher({ type: 'SET_USER', selectedUser: user });
    ticketDispatcher({
      type: 'SET_TICKET',
      selectedTicket: { ...ticket, completed: true },
    });
  };

  return (
    <div>
      <h3>Assign Ticket to:</h3>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <a href="" onClick={(e) => onClick(e, u)}>{`User: ${u.name}`}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { TicketProvider } from './context/tickets-context';
import { AppHome } from './AppHome';

const App = () => {
  return (
    <TicketProvider>
      <AppHome />
    </TicketProvider>
  );
};

export default App;

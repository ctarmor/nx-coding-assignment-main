export type User = {
  id: number;
  name: string;
};

export type Ticket = {
  id: number;
  description: string;
  assigneeId: null | number;
  completed: boolean;
};

export type TicketState = {
  tickets: Ticket[],
  users: User[],
  selectedTicket?: Ticket
}

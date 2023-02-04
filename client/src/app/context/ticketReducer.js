//
// ticket reducers
//

export const ticketReducer = (curState, action) => {
  console.log('>>> ticketReducer:', action.type, action);
  switch (action.type) {
    case 'SET_TICKETDETAILS':
      return {
        ...curState,
        selectedTicket: action.ticket,
      };
  }
};

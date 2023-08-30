const initialState = [
  {
    id: 0,
    name: "Mg mg",
    number: 415151,
    email: "mm@gmail.com",
  },
  {
    id: 1,
    name: "K K",
    number: 1414141,
    email: "kk@gmail.com",
  },
];
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "UPDATE_CONTACT":
      const updatedState = state.map((c) =>
        c.id === action.payload.id ? action.payload : c
      );
      return (state = updatedState);
    case "DELETE_CONTACT":
      state = state.filter((c) => c.id !== action.payload);
      return state;
    default:
      return state;
  }
};

export default contactReducer;

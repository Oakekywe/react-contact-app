

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
    default:
      return state;
  }
};

export default contactReducer;

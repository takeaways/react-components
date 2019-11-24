const initialState = {
  mainPost: []
};

export const MAIN_POST = "MAIN_POST";

const dummyPost = {
  name: "Geonil",
  age: 29,
  gender: "male"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIN_POST: {
      return {
        ...state,
        mainPost: [...state.mainPost, action.data]
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;

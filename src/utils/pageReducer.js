// Define PageActionTypes
export const PageActionTypes = {
  page: "page",
  section: "section",
  formSection: "formSection",
  isLoggedIn: "isLoggedIn",
  location: "location",
};

// Initial State
const PageInitialState = {
  page: {},
  section: "Banner",
  formSection: "",
  location: null,
};

// Reducer function
function pageReducer(state = PageInitialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PageActionTypes.isLoggedIn:
      return { ...state, isLoggedIn: payload.isLoggedIn };

    default:
      return state;
  }
}

export { pageReducer };

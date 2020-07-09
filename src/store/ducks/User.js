export const Types = {
  SET_AUTH_DATA: 'USER_SET_AUTH_DATA',
};

const initialState = {
  token: null,

  isLogged: false,
};

export function setAuthData({ token }) {
  return {
    type: Types.SET_AUTH_DATA,
    token,
  };
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_AUTH_DATA:
      return {
        ...state,
        token: action.token,
        isLogged: true,
      };
    default:
      return state;
  }
}

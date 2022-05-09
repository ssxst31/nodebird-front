export const initialState = {
  isLoggingIn: false, // 로그인 시도중
  isLoggedIn: false,
  isLoggingOut: false, // 로그아웃 시도중
  me: null,
  signUpData: {},
  loginData: {},
};

export const loginRequestAction = (data) => {
  return {
    type: "LOG_IN_Request",
    data,
  };
};

export const logoutRequestAction = (data) => {
  return {
    type: "LOG_OUT_Request",
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        ...state.user,
        isLoggingIn: true,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state.user,
        isLoggingIn: true,
        isLoggedIn: true,
        me: { ...action.data, nickName: "ssxst31" },
      };
    case "LOG_IN_FAILURE":
      return { ...state.user, isLoggingIn: true, isLoggedIn: true };
    case "LOG_OUT_REQUEST":
      return { ...state.user, isLoggingOut: true };
    case "LOG_OUT_SUCCESS":
      return {
        ...state.user,
        isLoggingOut: false,
        isLoggedOut: false,
        me: null,
      };
    case "LOG_OUT_FAILURE":
      return {
        ...state.user,
        isLoggingOut: false,
      };
    default:
      return state;
  }
};

export default reducer;

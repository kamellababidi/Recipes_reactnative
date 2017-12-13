//action typres
export const types = {
  SET_EMAIL_PASSWORD: 'SET_EMAIL_PASSWORD'
}

//declare action
export const actionCreators = {
  SET_EMAIL_PASSWORD: (info) => {
    return {type: types.SET_EMAIL_PASSWORD, payload: info}
  }
}

//all states here
const initialState = {
  email: '',
  password: ''
}

//the reducer called by redux to handle actions
export const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.SET_EMAIL_PASSWORD: {
      return {
        ...state,
        email: payload.email,
        password: payload.password,
      }
    }
  }

  return state
}
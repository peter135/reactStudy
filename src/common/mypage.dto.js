export const initialState = {
    me: {},
}

export const MyTypes = {
    SET_ME: 'DETAIL/SET_DETAIL',      
}
    
export function reducer(myPageDto = initialState, action) {
  switch (action.type) {
    case MyTypes.SET_ME:
        return { ...myPageDto, me: action.me }
    default:
      return myPageDto
  }
}
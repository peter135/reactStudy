
export const initialState = {
    videoList: [],
}

export const ListTypes = {
    SET_LIST: 'LIST/SET_LIST',      
}
    
export function reducer(listDto = initialState, action) {
  switch (action.type) {
    case ListTypes.SET_LIST:
        return { ...listDto, videoList: action.list }
    default:
      return listDto
  }
}
    
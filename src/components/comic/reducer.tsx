
export interface IState {
    episodes: [] ,
    favourites: []
  }
  
  export interface IAction {
    type: string,
    payload: any
  }
  
  export const initialState: IState = {
    episodes: [],
    favourites: []
  }

  export function reducer(state: IState, action: IAction) : IState{
    switch (action.type) {
      case 'FETCH_DATA':
        return {...state, episodes: action.payload}
      case 'REMOVE_DATA':
        return state
      default:
        return state
    }
  }

  
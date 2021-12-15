import React from "react"

export const GLobalStateContext = React.createContext()
export const GLobalDispatchContext = React.createContext()

const initialState = {
  data: "",
  session: "",
  category: "",
  service: "",
  personnel: "",
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_STATE": {
      return {
        ...state,
        data: state.theme,
        session: state.theme,
        category: state.theme,
        service: state.theme,
        personnel: state.theme,
      }
    }

    default:
      throw new Error("Invalid action type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GLobalStateContext.Provider value={state}>
      <GLobalDispatchContext.Provider value={dispatch}>
        {children}
      </GLobalDispatchContext.Provider>
    </GLobalStateContext.Provider>
  )
}

export default GlobalContextProvider

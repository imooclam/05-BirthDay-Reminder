import { useContext, createContext, useReducer, useEffect } from 'react';
import { REMOVE, CLEAR, RESET } from '../action';

import reducer from '../reducer/BirthReducer';
import data from '../data';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);
const initialValue = {
  person: data,
};

const Global = ({ children }) => {
  const reset = () => {
    dispatch({
      type: RESET,
    });
  };
  const personData = () => {
    dispatch({
      type: CLEAR,
    });
  };
  const remove = id => {
    dispatch({
      type: REMOVE,
      payload: { id },
    });
  };

  // const [name, setName] = useState('Mero');
  const [state, dispatch] = useReducer(reducer, initialValue);
  // console.log(name);
  return (
    <GlobalContext.Provider value={{ ...state, personData, reset, remove }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default Global;

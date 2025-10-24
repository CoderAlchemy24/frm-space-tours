import { createContext, useContext, useState } from 'react';

const IdxContext = createContext(undefined);

export function IdxProvider({ children }) {
  const [destIdx, setDestIdx] = useState(0);
  const [crewIdx, setCrewIdx] = useState(0);
  const [techIdx, setTechIdx] = useState(0);
  

   return (
    <IdxContext.Provider value={{ destIdx, setDestIdx, crewIdx, setCrewIdx, techIdx, setTechIdx }}>
      {children}
    </IdxContext.Provider>
  );
}

export function useIdx() {
  const ctx = useContext(IdxContext);
  if (ctx === undefined) {
    throw new Error('useIdx csak IdxProvider-en belül használható');
  }
  return ctx;
}
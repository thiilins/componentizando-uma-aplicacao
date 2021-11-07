import { createContext, ReactNode, useContext, useState } from "react";

// Interfaces (typescript)
interface MainContextData {
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

interface MainProviderProps {
  children: ReactNode;
}
// Criando o contexto
const MainContext = createContext<MainContextData>({} as MainContextData);

//Exportando o Provider do Contexto
export function MainProvider({ children }: MainProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <MainContext.Provider value={{ selectedGenreId, handleClickButton }}>
      {children}
    </MainContext.Provider>
  );
}
// Criando e exportando o Hook
export function useMain() {
  const context = useContext(MainContext);
  return context;
}

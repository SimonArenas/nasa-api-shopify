import { createContext } from "react";

export interface DataContextType {
  data: {};
  setData: (value: any | null) => void;
  showPhoto: boolean;
  setShowPhoto: (value: boolean) => void;
  showCalendar: boolean;
  setShowCalendar: (value: boolean) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export default DataContext;

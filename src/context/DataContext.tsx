// import { createContext, useContext, useState } from 'react';

// interface DataProps {
//   children: React.ReactNode;
// }
// export type Data = 'PL' | 'ENG';

// type DataContext = {
//   language: Data;
//   setLanguage: React.Dispatch<React.SetStateAction<Data>>;
// };

// export const LanguageContext = createContext<DataContext | null>(null);

// export const DataContextProvider = ({ children }: DataProps) => {
//   const [data, setData] = useState<Data>('PL');

//   return (
//     <DataContext.Provider
//       value={{
//         data,
//         setData,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useData = () => {
//   const context = useContext(DataContext);
//   if (context === null) {
//     throw new Error('useLanguage must be used within a DataContextProvider');
//   }
//   return context;
// };

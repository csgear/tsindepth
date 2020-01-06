import React from 'react' ;
import ComicPage from './components/comic/ComicPage' ;
import StoreProvider from "./components/comic/Store" ;

export default function App() {
  return (
    <StoreProvider>
        <ComicPage />
    </StoreProvider>
  );
}

import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary.tsx';
import './output.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/theme.tsx';

const NavigationLazy = lazy(() => import('./components/Navigation/Navigation.tsx'));
const AppLazy = lazy(() => import('./App.tsx'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ErrorBoundary>
        <ChakraProvider theme={theme}>
          <Suspense fallback={<div>Loading...</div>}>
            <NavigationLazy />
            <AppLazy />
          </Suspense>
        </ChakraProvider>
      </ErrorBoundary>
    </HashRouter>
  </React.StrictMode>,
);

;

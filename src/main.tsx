import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary.tsx';
import './SCSS/main.scss';
import './output.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/theme.tsx';

const NavigationLazy = lazy(() => import('./Navigation/Navigation.tsx'));
const AppLazy = lazy(() => import('./App.tsx'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ChakraProvider theme={theme}>
          <Suspense fallback={<div>Loading...</div>}>
            <NavigationLazy />
            <AppLazy />
          </Suspense>
        </ChakraProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
);

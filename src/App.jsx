import { Suspense } from 'react';

import { RouterProvider } from 'react-router-dom';

import Error from './components/custom/error';
import ErrorBoundary from './components/custom/error-boundary';
import LoadingSpinner from './components/custom/skeletons/loading-spinner';
import router from './router';

/**
 * Renders the main application component, which sets up error handling and loading state for the React Router.
 *
 * The `App` component is the top-level component that renders the entire application.
 * It uses the `ErrorBoundary` component to catch and display any errors that occur during rendering.
 * It also uses the `Suspense` component to display a loading spinner while the main application content is being loaded.
 *
 * The `RouterProvider` component is used to render the React Router, which handles the routing and navigation for the application.
 */
function App() {
  return (
    <>
      <ErrorBoundary fallback={<Error msg={'Failed to load page.'} />}>
        <Suspense fallback={<LoadingSpinner />}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;

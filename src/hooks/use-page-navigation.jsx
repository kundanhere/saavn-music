import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { useStore } from '@/store/use-store';

/**
 * A custom React hook for handling page navigation within a single-page application.
 * It uses the `react-router-dom` library to navigate between pages and updates the application's state accordingly.
 *
 * @returns {Object} An object containing two functions: `handleGoBack` and `handleGoForward`.
 */
const usePageNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let { setCanGoBack } = useStore();

  /**
   * Handles the navigation to the previous page.
   * If the current page is not the root page, it navigates back one step.
   * Otherwise, it updates the application's state to indicate that it cannot go back.
   */
  const handleGoBack = () => {
    location.key !== 'default' && location.pathname !== '' ? navigate(-1) : setCanGoBack(false);
  };

  /**
   * Handles the navigation to the next page.
   * If there is a page available to navigate to, it navigates forward one step.
   * It also updates the application's state to indicate that it can go back.
   */
  const handleGoForward = () => {
    if (navigate.length > 0) {
      navigate(+1);
      setCanGoBack(true);
    }
  };

  /**
   * An effect hook that updates the application's state when the location changes.
   * If the current page is the root page, it updates the application's state to indicate that it cannot go back.
   */
  useEffect(() => {
    function goBack() {
      if (location.key !== 'default' && location.pathname === '/') setCanGoBack(true);
    }
    goBack();
  }, [navigate, location, setCanGoBack]);

  return { handleGoBack, handleGoForward };
};

export default usePageNavigation;

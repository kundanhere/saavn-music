import { LoaderCircle } from 'lucide-react';

/**
 * Renders a loading spinner component with a "Loading..." message.
 * This component is used to indicate that content is being loaded.
 * It is typically displayed in the center of the screen or a container.
 */
const LoadingSpinner = () => {
  return (
    <div className="flex h-full max-h-[100vh] min-h-[calc(100vh-13rem)] flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <LoaderCircle className="h-8 w-8 animate-spin text-foreground/50" />
        <p className="mt-2 text-xs">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;

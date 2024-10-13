import { CircleAlert } from 'lucide-react';

import { cn } from '@/lib/utils';

/**
 * Renders an error message with a CircleAlert icon.
 */
const Error = ({ msg, className }) => {
  return (
    <div aria-label="alert" className={cn('flex items-center justify-center font-semibold text-red-600', className)}>
      <CircleAlert className="mr-2 size-5" />
      <h1>Error: {msg}</h1>
    </div>
  );
};

export default Error;

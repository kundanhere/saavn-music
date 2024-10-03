import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';

/**
 * Renders a 404 page component with a search icon, error message, and a button to navigate to the homepage.
 * The component is wrapped in a motion.div from the Framer Motion library to add a fade-in and slide-up animation.
 * The component is centered on the page and has a rounded border with a dashed style.
 */
const Page404 = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex h-full max-h-[100vh] min-h-[calc(100vh-13rem)] shrink-0 items-center justify-center rounded-md border border-dashed"
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <Search className="h-10 w-10 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold">Oops! We couldn&apos;t find out.</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">Sorry for this. Try looking for something else.</p>
        <Button variant="link" onClick={() => navigate('/')}>
          Go to homepage
        </Button>
      </div>
    </motion.div>
  );
};

export default Page404;

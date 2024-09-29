import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';

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

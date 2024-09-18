// Page layout
import { motion } from 'framer-motion';

import { Separator } from '@/components/ui/separator';

const Page = ({ styles = '', title = 'Title', body = 'This is body text.', children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={styles}
      {...props}
    >
      <div className="w-fit space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground">{body}</p>
      </div>
      <Separator className="my-4" />
      {children}
    </motion.div>
  );
};

export default Page;

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { tabs } from '@/store/data';

/**
 * A component that renders a tab trigger with the given tab name and value.
 *
 * @param {Object} props - The component props.
 * @param {string} props.tab - The name of the tab.
 * @param {string} props.value - The value of the tab.
 * @param {...any} props - Any additional props to be passed to the TabsTrigger component.
 * @returns {React.ReactElement} - The Trigger component.
 */
const Trigger = ({ tab, value, ...props }) => {
  return (
    <TabsTrigger
      value={value}
      className="relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
      {...props}
    >
      {tab}
    </TabsTrigger>
  );
};

/**
 * A component that renders a set of tabs with a list of tab triggers and the content for each tab.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content for the tabs.
 * @param {string} [props.defaultValue='music'] - The default selected tab value.
 * @returns {React.ReactElement} - The HomeTabs component.
 */
const HomeTabs = ({ children, defaultValue = 'music' }) => {
  return (
    <Tabs defaultValue={defaultValue} className="space-y-6">
      <TabsList className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
        {tabs.map((tab) => (
          <Trigger key={tab.key} tab={tab.name} value={tab.key} disabled={tab.disabled} />
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
};

export default HomeTabs;

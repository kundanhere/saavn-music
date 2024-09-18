import { NavLink } from 'react-router-dom';

import { useStore } from '@/store/use-store';

const buttonState = {
  active: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
  inActive: 'hover:bg-accent hover:text-accent-foreground',
  disabled: 'pointer-events-none opacity-50',
};

const ButtonLink = ({ icon: Icon, disabled = false, children, ...props }) => {
  let { setCanGoBack } = useStore();

  return (
    <NavLink
      {...props}
      onClick={() => setCanGoBack(true)}
      className={({ isActive }) =>
        `${
          disabled ? buttonState.disabled : isActive ? buttonState.active : buttonState.inActive
        } inline-flex h-9 w-full items-center justify-start whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`
      }
    >
      <Icon className="mr-2 h-4 w-4" />
      {children}
    </NavLink>
  );
};

export default ButtonLink;

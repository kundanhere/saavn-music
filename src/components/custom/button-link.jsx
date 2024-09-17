import { NavLink } from 'react-router-dom';
import { useStore } from '@/store/useStore';

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
        (disabled ? buttonState.disabled : isActive ? buttonState.active : buttonState.inActive) +
        ' inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 px-4 py-2 w-full justify-start '
      }
    >
      <Icon className="mr-2 h-4 w-4" />
      {children}
    </NavLink>
  );
};

export default ButtonLink;

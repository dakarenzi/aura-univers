import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
export const AnimatedOutlet = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Outlet key={location.pathname} />
    </AnimatePresence>
  );
};
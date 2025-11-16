import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { VideosPage } from '@/pages/VideosPage';
import { ContactPage } from '@/pages/ContactPage';
import { AppLayout } from '@/components/layout/AppLayout';
const AnimatedOutlet = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Outlet key={location.pathname} />
    </AnimatePresence>
  );
};
const router = createBrowserRouter([
  {
    element: (
      <AppLayout>
        <AnimatedOutlet />
      </AppLayout>
    ),
    errorElement: <RouteErrorBoundary />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/gallery", element: <GalleryPage /> },
      { path: "/videos", element: <VideosPage /> },
      { path: "/contact", element: <ContactPage /> },
    ]
  }
]);
// Do not touch this code
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
)
import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { VideosPage } from '@/pages/VideosPage';
import { ContactPage } from '@/pages/ContactPage';
import { AppLayout } from '@/components/layout/AppLayout';
import { AnimatedOutlet } from '@/components/AnimatedOutlet';
import { Toaster } from '@/components/ui/sonner';
import { AdvocacyPage } from '@/pages/AdvocacyPage';
import { QAPage } from '@/pages/QAPage';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageProvider';
import { PressKitPage } from './pages/PressKitPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
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
      { path: "/advocacy", element: <AdvocacyPage /> },
      { path: "/qa", element: <QAPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/blog/:slug", element: <BlogPostPage /> },
      { path: "/press-kit", element: <PressKitPage /> },
      { path: "/contact", element: <ContactPage /> },
    ]
  }
]);
// Do not touch this code
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <HelmetProvider>
        <ErrorBoundary>
          <RouterProvider router={router} />
          <Toaster />
        </ErrorBoundary>
      </HelmetProvider>
    </LanguageProvider>
  </StrictMode>,
)
import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';
import SeoExample from './pages/SeoExample';
import { RootLayout } from './layouts/RootLayout';



const rootRoute = createRootRoute({
  component: RootLayout
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const experienceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/experience',
  component: ExperiencePage,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: ProjectsPage,
});

const blogsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blogs',
  component: BlogsPage,
});

const blogDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/$slug',
  component: BlogDetailPage,
});

const seoExampleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/seo-example',
  component: SeoExample,
});

const routeTree = rootRoute.addChildren([
  indexRoute, 
  experienceRoute, 
  projectsRoute, 
  blogsRoute,
  blogDetailRoute,
  seoExampleRoute
]);

export const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

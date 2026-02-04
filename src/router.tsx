import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';

const rootRoute = createRootRoute();

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

const routeTree = rootRoute.addChildren([
  indexRoute, 
  experienceRoute, 
  projectsRoute, 
  blogsRoute,
  blogDetailRoute
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

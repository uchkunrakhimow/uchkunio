import { Outlet } from '@tanstack/react-router';
import FloatingControls from '@/components/FloatingControls';

export const RootLayout = () => {
  return (
    <>
      <Outlet />
      <FloatingControls />
    </>
  )
}

import { Outlet } from "@remix-run/react";

export default function NoNavLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
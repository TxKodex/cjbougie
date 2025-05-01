import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";
import NavLayout from "./components/NavLayout";
import NoNavLayout from "./components/NoNavLayout";
import "./design.scss";

export function Layout({ children }: { children: React.ReactNode }) {
  const matches = useMatches();
  const noLayout = matches.some((m) => m.handle?.noLayout);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {noLayout ? <NoNavLayout /> : <NavLayout />}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
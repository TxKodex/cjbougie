import { Outlet } from "@remix-run/react";

export default function NoNavLayout() {
  return (
    <>
      <nav className="dashboardNav">
        <div className="dashboardNav__top">
          <p className="dashboardNav__logo">C&J</p>
        </div>
        <div className="dashboardNav__content">
          <img
            src="/icones/dashboard_dm.png"
            alt="Dashboard icon"
            className="dashboardNav__icon"
            width="40"
          />
          <img
            src="/icones/graph_dm.png"
            alt="Stats icon"
            className="dashboardNav__icon"
            width="40"
          />
          <img
            src="/icones/servers_dm.png"
            alt="Database icon"
            className="dashboardNav__icon"
            width="40"
          />
        </div>
        <div className="dashboardNav__bottom">
          <img
            src="/icones/setting_dm.png"
            alt="Settings icon"
            className="dashboardNav__icon"
            width="40"
          />
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

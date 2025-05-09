import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { prisma } from "../../prisma/client";

export const handle = { noLayout: true };

export default function DashboardProducts() {
  return (
    <div className="dashboardProducts">
      <div className="dashboardProducts__homeButton">
        <Link to="/dashboard/list" className="dashboardProducts__list">
          <p className="dashboardProducts__Link">Liste des produits</p>
        </Link>
        <Link
          to="/dashboard/manageProducts"
          className="dashboardProducts__manage"
          id="manageProducts"
        >
          <p className="dashboardProducts__Link">Ajouter un produit</p>
        </Link>
      </div>
    </div>
  );
}
